import type { AuthSessionOrNull } from "../../../../api-type/src/model/auth/AuthSessionOrNull";
import { createAuthSessionInfo } from "./createAuthSessionInfo";
import { createAuthUser } from "./createAuthUser";

/**
 * @description 認証セッション（存在しない場合は空オブジェクト）
 */
export function createAuthSessionOrNull(data?: Partial<AuthSessionOrNull>): AuthSessionOrNull {
  
  return {
  ...{"user": createAuthUser(),"session": createAuthSessionInfo()},
  ...data || {}
  }
}