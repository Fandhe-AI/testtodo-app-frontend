import type { BetterAuthOptions } from "better-auth";

/**
 * セッション Cookie キャッシュの戦略
 * - compact: 最小サイズ
 * - jwt: JWT互換性、外部連携向け
 * - jwe: 最大セキュリティ、暗号化（推奨）
 * @see https://www.better-auth.com/docs/concepts/session-management#cookie-cache-strategies
 */
export type SessionStrategy = "compact" | "jwt" | "jwe";

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
   * Cookie キャッシュの戦略
   * - compact: 最小サイズ
   * - jwt: JWT互換性、外部連携向け
   * - jwe: 最大セキュリティ、暗号化（推奨）
   * @default "jwt"
   * @see https://www.better-auth.com/docs/concepts/session-management#cookie-cache-strategies
   */
  strategy: SessionStrategy;

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
