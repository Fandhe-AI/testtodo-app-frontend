import type { Category } from "../../../../api-type/src/model/todo/Category";
import { faker } from "@faker-js/faker";

/**
 * @description カテゴリを表現するオブジェクト
 */
export function createCategory(data?: Partial<Category>): Category {
  
  return {
  ...{"id": faker.string.alpha(),"name": faker.string.alpha({ length: { min: 1, max: 50 } }),"description": faker.string.alpha({ length: 200 }),"color": faker.helpers.fromRegExp("^#[0-9a-fA-F]{6}$"),"created_at": faker.date.anytime().toISOString()},
  ...data || {}
  }
}