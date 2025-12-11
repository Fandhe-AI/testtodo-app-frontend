import { createAuth } from "@repo/shared-lib-auth/server";
import { env } from "~/const/env";

/**
 * Better Auth サーバーインスタンス
 *
 * Stateless Session Management として設定します。
 * - セッションの検証のみを行います（データベース不要）
 * - 実際の認証処理（signUp, signIn）は apps/mock の認証APIサーバーが担当
 *
 * @see https://www.better-auth.com/docs/concepts/session-management#stateless-session-management
 */
export const auth = createAuth({
  secret: env.AUTH_SESSION_SECRET,
  baseURL: env.AUTH_API_BASE_URL,
  sessionMaxAge: 7 * 24 * 60 * 60, // 7日間
  strategy: "jwt" as const,
});
