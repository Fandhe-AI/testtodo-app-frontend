import type { AuthSession } from "../../../../api-type/src/model/auth/AuthSession";
import { createAuthSessionInfo } from "./createAuthSessionInfo";
import { createAuthUser } from "./createAuthUser";

/**
 * @description 認証セッション（ユーザー情報とセッション情報を含む）
 */
export function createAuthSession(data?: Partial<AuthSession>): AuthSession {
  
  return {
  ...{"user": createAuthUser(),"session": createAuthSessionInfo()},
  ...data || {}
  }
}