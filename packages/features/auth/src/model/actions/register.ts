import { parseSubmission, report } from "@conform-to/react/future";
import type { Auth } from "@repo/shared-lib-auth/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { registerSchema } from "../schemas";

/**
 * 登録アクションの設定
 */
export type RegisterConfig = {
  /**
   * Better Auth サーバーインスタンス
   */
  auth: Auth;
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
 *   auth,
 *   defaultCallbackURL: "/",
 * });
 * ```
 */
export const createRegister = ({
  auth,
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
      const headerList = await headers();

      await auth.api.signUpEmail({
        body: { email, password, name },
        headers: headerList,
      });

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
