import fetch from "@repo/shared-config-kubb";
import type { PostSignInEmailMutationRequest, PostSignInEmailMutationResponse, PostSignInEmail401 } from "../../../../../api-type/src/model/auth/authController/PostSignInEmail";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { postSignInEmailMutationResponseSchema, postSignInEmailMutationRequestSchema } from "../../../../../api-zod/src/model/auth/authController/postSignInEmailSchema";

function getPostSignInEmailUrl() {
  const res = { method: 'POST', url: `/sign-in/email` as const }  
  return res
}

/**
 * @description メールアドレスとパスワードでログインします。成功すると、セッション Cookie が設定されます。**注意**: このエンドポイントは Next.js アプリケーション（Better Auth）が処理します。
 * @summary メールアドレスでログイン
 * {@link /sign-in/email}
 */
export async function postSignInEmail(data: PostSignInEmailMutationRequest, config: Partial<RequestConfig<PostSignInEmailMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const requestData = postSignInEmailMutationRequestSchema.parse(data)  
  
  const res = await request<PostSignInEmailMutationResponse, ResponseErrorConfig<PostSignInEmail401>, PostSignInEmailMutationRequest>({ method : "POST", url : getPostSignInEmailUrl().url.toString(), data : requestData, ... requestConfig })  
  return postSignInEmailMutationResponseSchema.parse(res.data)
}