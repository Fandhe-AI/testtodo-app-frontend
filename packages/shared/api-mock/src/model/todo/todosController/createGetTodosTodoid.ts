import type { GetTodosTodoidPathParams, GetTodosTodoidQueryResponse } from "../../../../../api-type/src/model/todo/todosController/GetTodosTodoid";
import { createCustomError } from "../createCustomError";
import { createTodo } from "../createTodo";
import { faker } from "@faker-js/faker";

export function createGetTodosTodoidPathParams(data?: Partial<GetTodosTodoidPathParams>): GetTodosTodoidPathParams {
  
  return {
  ...{"todoId": faker.string.alpha()},
  ...data || {}
  }
}

/**
 * @description Todo の取得に成功
 */
export function createGetTodosTodoid200() {
  
  return createTodo()
}

/**
 * @description 認証が必要です
 */
export function createGetTodosTodoid401() {
  
  return createCustomError()
}

/**
 * @description リソースが見つかりません
 */
export function createGetTodosTodoid404() {
  
  return createCustomError()
}

/**
 * @description サーバー内部エラー
 */
export function createGetTodosTodoid500() {
  
  return createCustomError()
}

export function createGetTodosTodoidQueryResponse(data?: Partial<GetTodosTodoidQueryResponse>): GetTodosTodoidQueryResponse {
  
  return data || faker.helpers.arrayElement<any>([createGetTodosTodoid200()])
}