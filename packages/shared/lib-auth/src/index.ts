/**
 * @repo/shared-lib-auth
 *
 * Better Auth を使用した認証ライブラリのラッパーです。
 * アプリケーション固有の設定は apps/app で行い、
 * このパッケージは設定を受け取って認証機能を提供します。
 *
 * @example
 * ```typescript
 * // サーバーサイド（apps/app/src/lib/auth.ts）
 * import { createAuth } from "@repo/shared-lib-auth/server";
 *
 * export const auth = createAuth({
 *   secret: process.env.AUTH_SESSION_SECRET,
 *   baseURL: process.env.AUTH_API_BASE_URL,
 * });
 *
 * // クライアントサイド（apps/app/src/lib/auth-client.ts）
 * import { createAuthClient } from "@repo/shared-lib-auth/client";
 *
 * export const authClient = createAuthClient();
 * export const { useSession, signIn, signOut } = authClient;
 *
 * // プロキシ（apps/app/src/lib/auth-proxy.ts）
 * import { createAuthProxy } from "@repo/shared-lib-auth/proxy";
 * import { auth } from "./auth";
 *
 * export const authProxy = createAuthProxy(auth, {
 *   publicPaths: ["/login", "/register"],
 *   loginPath: "/login",
 * });
 * ```
 */

// Server
export * from "./lib/create-auth";
// Client
export * from "./lib/create-auth-client";
// Proxy
export * from "./lib/create-auth-proxy";
// Type
export * from "./type";
