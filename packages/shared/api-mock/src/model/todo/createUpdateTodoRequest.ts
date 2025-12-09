import type { UpdateTodoRequest } from "../../../../api-type/src/model/todo/UpdateTodoRequest";
import { faker } from "@faker-js/faker";

/**
 * @description Todo 更新時のリクエストボディ（部分更新対応）
 */
export function createUpdateTodoRequest(data?: Partial<UpdateTodoRequest>): UpdateTodoRequest {
  
  return {
  ...{"title": faker.string.alpha({ length: { min: 1, max: 200 } }),"description": faker.string.alpha({ length: 1000 }),"status": faker.helpers.arrayElement<NonNullable<UpdateTodoRequest>["status"]>(["pending", "completed"]),"priority": faker.helpers.arrayElement<NonNullable<UpdateTodoRequest>["priority"]>(["low", "medium", "high"]),"category_id": faker.string.alpha(),"due_date": faker.date.anytime().toISOString()},
  ...data || {}
  }
}