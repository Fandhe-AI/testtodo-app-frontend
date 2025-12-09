import type { AuthUser } from "../../../../api-type/src/model/auth/AuthUser";
import { faker } from "@faker-js/faker";

/**
 * @description 認証ユーザー情報
 */
export function createAuthUser(data?: Partial<AuthUser>): AuthUser {
  
  return {
  ...{"id": faker.string.alpha(),"email": faker.internet.email(),"name": faker.string.alpha(),"emailVerified": faker.datatype.boolean(),"image": faker.string.alpha(),"createdAt": faker.date.anytime().toISOString(),"updatedAt": faker.date.anytime().toISOString()},
  ...data || {}
  }
}