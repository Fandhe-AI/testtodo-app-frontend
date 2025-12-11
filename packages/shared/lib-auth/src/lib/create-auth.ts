import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import type { AuthConfig } from "../type";

type BetterAuthReturn = ReturnType<typeof betterAuth>;

/**
 * Better Auth サーバーインスタンスを作成
 *
 * Stateless Session Management を使用した認証設定です。
 * データベース不要で、Cookie ベースのセッション管理を行います。
 *
 * @param config - 認証設定
 * @returns Better Auth インスタンス
 *
 * @example
 * ```typescript
 * // apps/app/src/lib/auth.ts
 * import { createAuth } from "@repo/shared-lib-auth/server";
 *
 * export const auth = createAuth({
 *   secret: process.env.AUTH_SESSION_SECRET,
 *   baseURL: process.env.BETTER_AUTH_URL,
 *   sessionMaxAge: 7 * 24 * 60 * 60, // 7日間
 * });
 * ```
 *
 * @see https://www.better-auth.com/docs/concepts/session-management#stateless-session-management
 */
export const createAuth = ({
  secret,
  baseURL,
  sessionMaxAge = 7 * 24 * 60 * 60,
  options = {},
}: AuthConfig): BetterAuthReturn => {
  return betterAuth({
    /**
     * セッション設定
     *
     * cookieCache を有効にすることで、ステートレスセッション管理を実現します。
     */
    session: {
      ...options.session,
      cookieCache: {
        enabled: true,
        maxAge: sessionMaxAge,
        strategy: "jwt",
        ...options.session?.cookieCache,
      },
    },
    /**
     * アカウント設定
     *
     * cookieCache を有効にすることで、ステートレスセッション管理を実現します。
     */
    account: {
      storeStateStrategy: "cookie",
      storeAccountCookie: true,
      ...options.account,
    },
    /**
     * 秘密鍵
     */
    secret,
    /**
     * ベース URL
     */
    baseURL,
    /**
     * Next.js の Cookie プラグイン
     */
    plugins: [nextCookies()],
    /**
     * その他のオプション
     */
    ...options,
  });
};

export type Auth = BetterAuthReturn;
