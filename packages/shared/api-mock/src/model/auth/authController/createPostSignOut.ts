import type { PostSignOut200, PostSignOutMutationResponse } from "../../../../../api-type/src/model/auth/authController/PostSignOut";
import { faker } from "@faker-js/faker";

/**
 * @description ログアウト成功
 */
export function createPostSignOut200(data?: Partial<PostSignOut200>): PostSignOut200 {
  
  return {
  ...{"success": faker.datatype.boolean()},
  ...data || {}
  }
}

export function createPostSignOutMutationResponse(data?: Partial<PostSignOutMutationResponse>): PostSignOutMutationResponse {
  
  return data || faker.helpers.arrayElement<any>([createPostSignOut200()])
}