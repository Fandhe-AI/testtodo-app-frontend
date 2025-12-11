import { createAuthProxy } from "@repo/shared-lib-auth/proxy";
import { auth } from "./auth";

/**
 * 認証プロキシ
 *
 * セッションを厳格に検証し、未認証または期限切れの場合は
 * callbackURL付きでログインページにリダイレクトします。
 *
 * @example
 * ```typescript
 * // apps/app/src/lib/auth-proxy.ts
 * import { createAuthProxy } from "@repo/shared-lib-auth/proxy";
 * import { auth } from "./auth";
 *
 * export const authProxy = createAuthProxy(auth, {
 *   publicPaths: ["/login", "/register", "/api-test"],
 * });
 * ```
 */
export const authProxy = createAuthProxy(auth, {
  publicPaths: ["/login", "/register", "/forgot-password"],
});
