import { logger } from "@repo/shared-lib-pino";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { AuthProxyConfig } from "../type";
import type { Auth } from "./create-auth";

/**
 * デフォルトの公開パス
 */
const DEFAULT_PUBLIC_PATHS = ["/login", "/register"] as const;

/**
 * デフォルトの無視パス
 */
const DEFAULT_IGNORE_PATHS: string[] = [] as const;

/**
 * パスがリストに含まれるかどうかを判定
 */
const matchesPath = (pathname: string, paths: readonly string[]): boolean => {
  return paths.some((path) => pathname.startsWith(path));
};

/**
 * 認証プロキシを作成
 *
 * セッションを厳格に検証し、未認証または期限切れの場合はcallbackURL付きでログインページにリダイレクトします。
 *
 * @param auth - Better Auth インスタンス
 * @param config - プロキシ設定
 * @returns プロキシ関数
 *
 * @example
 * ```typescript
 * // apps/app/src/lib/auth-proxy.ts
 * import { createAuthProxy } from "@repo/shared-lib-auth/proxy";
 * import { auth } from "./auth";
 *
 * export const authProxy = createAuthProxy(auth, {
 *   publicPaths: ["/login", "/register", "/api/auth"],
 *   loginPath: "/login",
 * });
 * ```
 *
 * @example
 * ```typescript
 * // apps/app/src/proxy.ts
 * import { authProxy } from "./lib/auth-proxy";
 *
 * const nemo = new NEMO(
 *   {},
 *   { before: authProxy },
 * );
 * ```
 */
export const createAuthProxy = (auth: Auth, config: AuthProxyConfig = {}) => {
  const {
    publicPaths = DEFAULT_PUBLIC_PATHS,
    ignorePaths = DEFAULT_IGNORE_PATHS,
    loginPath = "/login",
  } = config;

  return async (request: NextRequest): Promise<NextResponse | undefined> => {
    const pathname = request.nextUrl.pathname;

    // 無視パスはスキップ
    if (matchesPath(pathname, ignorePaths)) {
      return NextResponse.next();
    }

    // 公開パスはスキップ
    if (matchesPath(pathname, publicPaths)) {
      return NextResponse.next();
    }

    try {
      // セッションを厳格に検証
      const session = await auth.api.getSession({
        headers: request.headers,
      });

      if (!session) {
        // 未認証または期限切れの場合はログインページにリダイレクト
        const loginUrl = new URL(loginPath, request.url);
        loginUrl.searchParams.set("callbackURL", pathname);
        return NextResponse.redirect(loginUrl);
      }

      // 認証済みの場合は続行
      return NextResponse.next();
    } catch (error) {
      // エラーが発生した場合はログインページにリダイレクト
      logger.error("Auth proxy error: %o", { error });
      const loginUrl = new URL(loginPath, request.url);
      loginUrl.searchParams.set("callbackURL", pathname);
      return NextResponse.redirect(loginUrl);
    }
  };
};
