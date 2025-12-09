import type { AuthError } from "../../../../api-type/src/model/auth/AuthError";
import { faker } from "@faker-js/faker";

/**
 * @description 認証エラー
 */
export function createAuthError(data?: Partial<AuthError>): AuthError {
  
  return {
  ...{"code": faker.helpers.arrayElement<NonNullable<AuthError>["code"]>(["INVALID_CREDENTIALS", "USER_NOT_FOUND", "USER_ALREADY_EXISTS", "INVALID_EMAIL", "WEAK_PASSWORD", "SESSION_EXPIRED", "UNAUTHORIZED"]),"message": faker.string.alpha()},
  ...data || {}
  }
}