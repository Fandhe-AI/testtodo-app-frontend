import type { AuthSessionInfo } from "../../../../api-type/src/model/auth/AuthSessionInfo";
import { faker } from "@faker-js/faker";

/**
 * @description セッション情報
 */
export function createAuthSessionInfo(data?: Partial<AuthSessionInfo>): AuthSessionInfo {
  
  return {
  ...{"id": faker.string.alpha(),"userId": faker.string.alpha(),"expiresAt": faker.date.anytime().toISOString()},
  ...data || {}
  }
}