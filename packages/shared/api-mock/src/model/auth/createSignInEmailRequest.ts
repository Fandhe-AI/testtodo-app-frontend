import type { SignInEmailRequest } from "../../../../api-type/src/model/auth/SignInEmailRequest";
import { faker } from "@faker-js/faker";

/**
 * @description メールログインのリクエストボディ
 */
export function createSignInEmailRequest(data?: Partial<SignInEmailRequest>): SignInEmailRequest {
  
  return {
  ...{"email": faker.internet.email(),"password": faker.string.alpha({ length: 8 })},
  ...data || {}
  }
}