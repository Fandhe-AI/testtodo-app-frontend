import type { PostCategoriesMutationResponse } from "../../../../../api-type/src/model/todo/categoriesController/PostCategories";
import { createCategory } from "../createCategory";
import { createCreateCategoryRequest } from "../createCreateCategoryRequest";
import { createCustomError } from "../createCustomError";
import { faker } from "@faker-js/faker";

/**
 * @description カテゴリの作成に成功
 */
export function createPostCategories201() {
  
  return createCategory()
}

/**
 * @description リクエストが不正です
 */
export function createPostCategories400() {
  
  return createCustomError()
}

/**
 * @description 認証が必要です
 */
export function createPostCategories401() {
  
  return createCustomError()
}

/**
 * @description バリデーションエラー
 */
export function createPostCategories422() {
  
  return createCustomError()
}

/**
 * @description サーバー内部エラー
 */
export function createPostCategories500() {
  
  return createCustomError()
}

export function createPostCategoriesMutationRequest() {
  
  return createCreateCategoryRequest()
}

export function createPostCategoriesMutationResponse(data?: Partial<PostCategoriesMutationResponse>): PostCategoriesMutationResponse {
  
  return data || faker.helpers.arrayElement<any>([createPostCategories201()])
}