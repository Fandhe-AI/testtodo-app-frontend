import type { GetTodosQueryParams, GetTodos200, GetTodosQueryResponse } from "../../../../../api-type/src/model/todo/todosController/GetTodos";
import { createCustomError } from "../createCustomError";
import { createPagination } from "../createPagination";
import { createTodo } from "../createTodo";
import { faker } from "@faker-js/faker";

export function createGetTodosQueryParams(data?: Partial<GetTodosQueryParams>): GetTodosQueryParams {
  
  return {
  ...{"status": faker.helpers.arrayElement<NonNullable<GetTodosQueryParams>["status"]>(["pending", "completed", "all"]),"category": faker.string.alpha(),"priority": faker.helpers.arrayElement<NonNullable<GetTodosQueryParams>["priority"]>(["low", "medium", "high"]),"search": faker.string.alpha(),"page": faker.number.int({ min: 1 }),"limit": faker.number.int({ min: 1, max: 100 }),"sort": faker.helpers.arrayElement<NonNullable<GetTodosQueryParams>["sort"]>(["created_at", "updated_at", "due_date", "priority", "title"]),"order": faker.helpers.arrayElement<NonNullable<GetTodosQueryParams>["order"]>(["asc", "desc"])},
  ...data || {}
  }
}

/**
 * @description Todo リストの取得に成功
 */
export function createGetTodos200(data?: Partial<GetTodos200>): GetTodos200 {
  
  return {
  ...{"data": faker.helpers.multiple(() => (createTodo())),"pagination": createPagination()},
  ...data || {}
  }
}

/**
 * @description リクエストが不正です
 */
export function createGetTodos400() {
  
  return createCustomError()
}

/**
 * @description 認証が必要です
 */
export function createGetTodos401() {
  
  return createCustomError()
}

/**
 * @description サーバー内部エラー
 */
export function createGetTodos500() {
  
  return createCustomError()
}

export function createGetTodosQueryResponse(data?: Partial<GetTodosQueryResponse>): GetTodosQueryResponse {
  
  return data || faker.helpers.arrayElement<any>([createGetTodos200()])
}