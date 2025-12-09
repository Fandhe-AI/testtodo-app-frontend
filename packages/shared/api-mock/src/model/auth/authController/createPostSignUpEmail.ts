import type { PostSignUpEmailMutationResponse } from "../../../../../api-type/src/model/auth/authController/PostSignUpEmail";
import { createAuthError } from "../createAuthError";
import { createAuthSession } from "../createAuthSession";
import { createSignUpEmailRequest } from "../createSignUpEmailRequest";
import { faker } from "@faker-js/faker";

/**
 * @description 登録成功
 */
export function createPostSignUpEmail200() {
  
  return createAuthSession()
}

/**
 * @description 登録失敗（メールアドレスが既に使用されているなど）
 */
export function createPostSignUpEmail400() {
  
  return createAuthError()
}

export function createPostSignUpEmailMutationRequest() {
  
  return createSignUpEmailRequest()
}

export function createPostSignUpEmailMutationResponse(data?: Partial<PostSignUpEmailMutationResponse>): PostSignUpEmailMutationResponse {
  
  return data || faker.helpers.arrayElement<any>([createPostSignUpEmail200()])
}