import fetch from "@repo/shared-config-kubb";
import type { PostSignOutMutationResponse } from "../../../../../api-type/src/model/auth/authController/PostSignOut";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { postSignOutMutationResponseSchema } from "../../../../../api-zod/src/model/auth/authController/postSignOutSchema";

function getPostSignOutUrl() {
  const res = { method: 'POST', url: `/sign-out` as const }  
  return res
}

/**
 * @description 現在のセッションを終了し、ログアウトします。セッション Cookie が削除されます。**注意**: このエンドポイントは Next.js アプリケーション（Better Auth）が処理します。
 * @summary ログアウト
 * {@link /sign-out}
 */
export async function postSignOut(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const res = await request<PostSignOutMutationResponse, ResponseErrorConfig<Error>, unknown>({ method : "POST", url : getPostSignOutUrl().url.toString(), ... requestConfig })  
  return postSignOutMutationResponseSchema.parse(res.data)
}