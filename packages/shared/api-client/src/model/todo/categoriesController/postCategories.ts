import fetch from "@repo/shared-config-kubb";
import type { PostCategoriesMutationRequest, PostCategoriesMutationResponse, PostCategories400, PostCategories401, PostCategories422, PostCategories500 } from "../../../../../api-type/src/model/todo/categoriesController/PostCategories";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { postCategoriesMutationResponseSchema, postCategoriesMutationRequestSchema } from "../../../../../api-zod/src/model/todo/categoriesController/postCategoriesSchema";

function getPostCategoriesUrl() {
  const res = { method: 'POST', url: `/categories` as const }  
  return res
}

/**
 * @description 新しいカテゴリを作成します。
 * @summary 新しいカテゴリの作成
 * {@link /categories}
 */
export async function postCategories(data: PostCategoriesMutationRequest, config: Partial<RequestConfig<PostCategoriesMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const requestData = postCategoriesMutationRequestSchema.parse(data)  
  
  const res = await request<PostCategoriesMutationResponse, ResponseErrorConfig<PostCategories400 | PostCategories401 | PostCategories422 | PostCategories500>, PostCategoriesMutationRequest>({ method : "POST", url : getPostCategoriesUrl().url.toString(), data : requestData, ... requestConfig })  
  return postCategoriesMutationResponseSchema.parse(res.data)
}