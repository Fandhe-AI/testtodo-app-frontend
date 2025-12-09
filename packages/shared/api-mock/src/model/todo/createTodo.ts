import type { Todo } from "../../../../api-type/src/model/todo/Todo";
import { faker } from "@faker-js/faker";

/**
 * @description Todo アイテムを表現するオブジェクト
 */
export function createTodo(data?: Partial<Todo>): Todo {
  
  return {
  ...{"id": faker.string.alpha(),"title": faker.string.alpha({ length: { min: 1, max: 200 } }),"description": faker.string.alpha({ length: 1000 }),"status": faker.helpers.arrayElement<NonNullable<Todo>["status"]>(["pending", "completed"]),"priority": faker.helpers.arrayElement<NonNullable<Todo>["priority"]>(["low", "medium", "high"]),"category_id": faker.string.alpha(),"due_date": faker.date.anytime().toISOString(),"created_at": faker.date.anytime().toISOString(),"updated_at": faker.date.anytime().toISOString()},
  ...data || {}
  }
}