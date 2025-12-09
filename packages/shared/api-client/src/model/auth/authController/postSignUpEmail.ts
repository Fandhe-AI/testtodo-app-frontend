import fetch from "@repo/shared-config-kubb";
import type { PostSignUpEmailMutationRequest, PostSignUpEmailMutationResponse, PostSignUpEmail400 } from "../../../../../api-type/src/model/auth/authController/PostSignUpEmail";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { postSignUpEmailMutationResponseSchema, postSignUpEmailMutationRequestSchema } from "../../../../../api-zod/src/model/auth/authController/postSignUpEmailSchema";

function getPostSignUpEmailUrl() {
  const res = { method: 'POST', url: `/sign-up/email` as const }  
  return res
}

/**
 * @description メールアドレスとパスワードで新規ユーザー登録を行います。成功すると、セッション Cookie が設定されます。**注意**: このエンドポイントは Next.js アプリケーション（Better Auth）が処理します。
 * @summary メールアドレスで新規登録
 * {@link /sign-up/email}
 */
export async function postSignUpEmail(data: PostSignUpEmailMutationRequest, config: Partial<RequestConfig<PostSignUpEmailMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const requestData = postSignUpEmailMutationRequestSchema.parse(data)  
  
  const res = await request<PostSignUpEmailMutationResponse, ResponseErrorConfig<PostSignUpEmail400>, PostSignUpEmailMutationRequest>({ method : "POST", url : getPostSignUpEmailUrl().url.toString(), data : requestData, ... requestConfig })  
  return postSignUpEmailMutationResponseSchema.parse(res.data)
}