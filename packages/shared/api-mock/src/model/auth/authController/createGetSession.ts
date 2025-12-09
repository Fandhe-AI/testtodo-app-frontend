import type { GetSessionQueryResponse } from "../../../../../api-type/src/model/auth/authController/GetSession";
import { createAuthSessionOrNull } from "../createAuthSessionOrNull";
import { faker } from "@faker-js/faker";

/**
 * @description セッション情報
 */
export function createGetSession200() {
  
  return createAuthSessionOrNull()
}

export function createGetSessionQueryResponse(data?: Partial<GetSessionQueryResponse>): GetSessionQueryResponse {
  
  return data || faker.helpers.arrayElement<any>([createGetSession200()])
}