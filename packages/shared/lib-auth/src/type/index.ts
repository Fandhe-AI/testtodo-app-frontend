import type { BetterAuthOptions } from "better-auth";

/**
 * 認証設定の型定義
 */
export type AuthConfig = {
  /**
   * Better Auth の秘密鍵
   * セッション Cookie の署名/暗号化に使用します
   */
  secret: string;

  /**
   * Better Auth のベース URL
   */
  baseURL?: string;

  /**
   * セッションの有効期限（秒）
   * @default 604800 (7日間)
   */
  sessionMaxAge?: number;

  /**
   * Better Auth の追加オプション
   */
  options?: Partial<BetterAuthOptions>;
};

/**
 * 認証プロキシの設定
 */
export type AuthProxyConfig = {
  /**
   * 認証不要なパス（公開パス）
   * @example ["/login", "/register"]
   */
  publicPaths?: string[];

  /**
   * 認証チェックをスキップするパス（静的ファイルなど）
   * @example ["/_next/static", "/favicon.ico"]
   */
  ignorePaths?: string[];

  /**
   * 未認証時のリダイレクト先
   * @default "/login"
   */
  loginPath?: string;
};

/**
 * 認証クライアントの設定
 */
export type AuthClientConfig = {
  /**
   * Better Auth API のベース URL
   * クライアント側から見た URL を指定します
   */
  baseURL?: string;
};
