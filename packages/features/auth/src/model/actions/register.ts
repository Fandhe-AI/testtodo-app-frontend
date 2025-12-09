import { parseSubmission, report } from "@conform-to/react/future";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { registerSchema } from "../schemas";

/**
 * 登録アクションの設定
 */
export type RegisterConfig = {
  /**
   * 認証API のベース URL
   * @example "http://localhost:8000/auth"
   */
  apiBaseURL: string;
  /**
   * デフォルトのリダイレクト先URL
   * @default "/"
   */
  defaultCallbackURL?: string;
};

/**
 * 登録 Server Action
 *
 * 外部の認証APIサーバーに対して新規登録リクエストを送ります。
 * 登録成功後、セッションCookieを設定してリダイレクトします。
 *
 * @param config - 登録アクションの設定
 * @returns 登録アクション
 *
 * @example
 * ```typescript
 * // apps/app/src/app/register/actions.ts
 * import { createRegister } from "@repo/features-auth";
 *
 * export const register = createRegister({
 *   authApiBaseURL: process.env.AUTH_API_BASE_URL,
 *   defaultCallbackURL: "/",
 * });
 * ```
 */
export const createRegister = ({
  apiBaseURL,
  defaultCallbackURL = "/",
}: RegisterConfig) => {
  return async (_prevState: unknown, formData: FormData) => {
    const submission = parseSubmission(formData);
    const result = registerSchema.safeParse(submission.payload);

    if (!result.success) {
      return report(submission, {
        error: {
          issues: result.error.issues,
        },
      });
    }

    const {
      email,
      password,
      name,
      callbackURL = defaultCallbackURL,
    } = result.data;

    try {
      const res = await fetch(`${apiBaseURL}/sign-up/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
        credentials: "include",
      });

      if (!res.ok) {
        const errorBody = await res.json();
        throw new Error(
          errorBody.message || "登録に失敗しました。もう一度お試しください。",
        );
      }

      // 認証APIサーバーから返されたCookieを取得してクライアントに設定
      const setCookieHeaders = res.headers.getSetCookie();
      const cookieStore = await cookies();

      for (const setCookie of setCookieHeaders) {
        const cookieAttrs = setCookie.split(";").map((attr) => attr.trim());
        const cookieObj: Record<string, string> = {};

        for (const attr of cookieAttrs) {
          const [key, ...rest] = attr.split("=");
          if (!key) continue;

          if (key && rest.length > 0) {
            cookieObj[key.toLowerCase()] = rest.join("=");
          } else if (key.toLowerCase() === "httponly") {
            cookieObj.httponly = "true";
          } else if (key.toLowerCase() === "secure") {
            cookieObj.secure = "true";
          }
        }

        const name = Object.keys(cookieObj).find(
          (k) =>
            k !== "path" &&
            k !== "max-age" &&
            k !== "samesite" &&
            k !== "httponly" &&
            k !== "secure",
        );
        const value = name ? cookieObj[name] : undefined;

        if (!name || !value) continue;

        cookieStore.set({
          name,
          value,
          maxAge: cookieObj["max-age"]
            ? Number(cookieObj["max-age"])
            : undefined,
          path: cookieObj.path || "/",
          httpOnly: cookieObj.httponly === "true",
          sameSite: cookieObj.samesite
            ? (cookieObj.samesite.toLowerCase() as "lax" | "strict" | "none")
            : "lax",
          secure:
            process.env.NODE_ENV === "production"
              ? true
              : cookieObj.secure === "true",
        });
      }

      // 登録成功後、リダイレクト
      redirect(callbackURL);
    } catch (error) {
      // redirectはエラーを投げるので、NEXT_REDIRECTの場合は再スロー
      if (error instanceof Error && error.message === "NEXT_REDIRECT") {
        throw error;
      }

      return report(submission, {
        error: {
          formErrors: [
            String(error instanceof Error ? error.message : "Unknown error"),
          ],
        },
      });
    }
  };
};
