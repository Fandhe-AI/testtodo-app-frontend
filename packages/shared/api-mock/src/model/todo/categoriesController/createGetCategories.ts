import type { GetCategories200, GetCategoriesQueryResponse } from "../../../../../api-type/src/model/todo/categoriesController/GetCategories";
import { createCategory } from "../createCategory";
import { createCustomError } from "../createCustomError";
import { faker } from "@faker-js/faker";

/**
 * @description カテゴリリストの取得に成功
 */
export function createGetCategories200(data?: Partial<GetCategories200>): GetCategories200 {
  
  return {
  ...{"data": faker.helpers.multiple(() => (createCategory()))},
  ...data || {}
  }
}

/**
 * @description 認証が必要です
 */
export function createGetCategories401() {
  
  return createCustomError()
}

/**
 * @description サーバー内部エラー
 */
export function createGetCategories500() {
  
  return createCustomError()
}

export function createGetCategoriesQueryResponse(data?: Partial<GetCategoriesQueryResponse>): GetCategoriesQueryResponse {
  
  return data || faker.helpers.arrayElement<any>([createGetCategories200()])
}