import { createAuthProxy } from "@repo/shared-lib-auth/proxy";
import { auth } from "./auth";

/**
 * 認証プロキシ
 *
 * アプリケーション固有の認証プロキシ設定を行います。
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
