import type { SignUpEmailRequest } from "../../../../api-type/src/model/auth/SignUpEmailRequest";
import { faker } from "@faker-js/faker";

/**
 * @description メール登録のリクエストボディ
 */
export function createSignUpEmailRequest(data?: Partial<SignUpEmailRequest>): SignUpEmailRequest {
  
  return {
  ...{"email": faker.internet.email(),"password": faker.string.alpha({ length: 8 }),"name": faker.string.alpha({ length: { min: 1, max: 100 } })},
  ...data || {}
  }
}