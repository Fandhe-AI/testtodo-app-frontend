import { parseSubmission, report } from "@conform-to/react/future";
import type { Auth } from "@repo/shared-lib-auth/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { loginSchema } from "../schemas";

/**
 * ログインアクションの設定
 */
export type LoginConfig = {
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
 * ログイン Server Action
 *
 * 外部の認証APIサーバーに対してログインリクエストを送ります。
 * 認証成功後、セッションCookieを設定してリダイレクトします。
 *
 * @param config - ログインアクションの設定
 * @returns ログインアクション
 *
 * @example
 * ```typescript
 * // apps/app/src/app/login/actions.ts
 * import { createLogin } from "@repo/features-auth";
 *
 * export const login = createLogin({
 *   auth,
 *   defaultCallbackURL: "/",
 * });
 * ```
 */
export const createLogin = ({
  auth,
  defaultCallbackURL = "/",
}: LoginConfig) => {
  return async (_prevState: unknown, formData: FormData) => {
    const submission = parseSubmission(formData);
    const result = loginSchema.safeParse(submission.payload);

    if (!result.success) {
      return report(submission, {
        error: {
          issues: result.error.issues,
        },
      });
    }

    const { email, password, callbackURL = defaultCallbackURL } = result.data;

    try {
      await auth.api.signInEmail({
        body: { email, password },
        headers: await headers(),
      });

      // ログイン成功後、リダイレクト
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
