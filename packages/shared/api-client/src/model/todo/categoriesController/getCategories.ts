import fetch from "@repo/shared-config-kubb";
import type { GetCategoriesQueryResponse, GetCategories401, GetCategories500 } from "../../../../../api-type/src/model/todo/categoriesController/GetCategories";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { getCategoriesQueryResponseSchema } from "../../../../../api-zod/src/model/todo/categoriesController/getCategoriesSchema";

function getGetCategoriesUrl() {
  const res = { method: 'GET', url: `/categories` as const }  
  return res
}

/**
 * @description 利用可能なカテゴリのリストを取得します。
 * @summary カテゴリリストの取得
 * {@link /categories}
 */
export async function getCategories(config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const res = await request<GetCategoriesQueryResponse, ResponseErrorConfig<GetCategories401 | GetCategories500>, unknown>({ method : "GET", url : getGetCategoriesUrl().url.toString(), ... requestConfig })  
  return getCategoriesQueryResponseSchema.parse(res.data)
}