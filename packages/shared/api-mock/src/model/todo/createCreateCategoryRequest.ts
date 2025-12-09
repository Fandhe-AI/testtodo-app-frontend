import type { CreateCategoryRequest } from "../../../../api-type/src/model/todo/CreateCategoryRequest";
import { faker } from "@faker-js/faker";

/**
 * @description カテゴリ作成時のリクエストボディ
 */
export function createCreateCategoryRequest(data?: Partial<CreateCategoryRequest>): CreateCategoryRequest {
  
  return {
  ...{"name": faker.string.alpha({ length: { min: 1, max: 50 } }),"description": faker.string.alpha({ length: 200 }),"color": faker.helpers.fromRegExp("^#[0-9a-fA-F]{6}$")},
  ...data || {}
  }
}