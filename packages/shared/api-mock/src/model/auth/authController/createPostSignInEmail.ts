import type { PostSignInEmailMutationResponse } from "../../../../../api-type/src/model/auth/authController/PostSignInEmail";
import { createAuthError } from "../createAuthError";
import { createAuthSession } from "../createAuthSession";
import { createSignInEmailRequest } from "../createSignInEmailRequest";
import { faker } from "@faker-js/faker";

/**
 * @description ログイン成功
 */
export function createPostSignInEmail200() {
  
  return createAuthSession()
}

/**
 * @description 認証失敗
 */
export function createPostSignInEmail401() {
  
  return createAuthError()
}

export function createPostSignInEmailMutationRequest() {
  
  return createSignInEmailRequest()
}

export function createPostSignInEmailMutationResponse(data?: Partial<PostSignInEmailMutationResponse>): PostSignInEmailMutationResponse {
  
  return data || faker.helpers.arrayElement<any>([createPostSignInEmail200()])
}