import type { PutTodosTodoidPathParams, PutTodosTodoidMutationResponse } from "../../../../../api-type/src/model/todo/todosController/PutTodosTodoid";
import { createCustomError } from "../createCustomError";
import { createTodo } from "../createTodo";
import { createUpdateTodoRequest } from "../createUpdateTodoRequest";
import { faker } from "@faker-js/faker";

export function createPutTodosTodoidPathParams(data?: Partial<PutTodosTodoidPathParams>): PutTodosTodoidPathParams {
  
  return {
  ...{"todoId": faker.string.alpha()},
  ...data || {}
  }
}

/**
 * @description Todo の更新に成功
 */
export function createPutTodosTodoid200() {
  
  return createTodo()
}

/**
 * @description リクエストが不正です
 */
export function createPutTodosTodoid400() {
  
  return createCustomError()
}

/**
 * @description 認証が必要です
 */
export function createPutTodosTodoid401() {
  
  return createCustomError()
}

/**
 * @description リソースが見つかりません
 */
export function createPutTodosTodoid404() {
  
  return createCustomError()
}

/**
 * @description バリデーションエラー
 */
export function createPutTodosTodoid422() {
  
  return createCustomError()
}

/**
 * @description サーバー内部エラー
 */
export function createPutTodosTodoid500() {
  
  return createCustomError()
}

export function createPutTodosTodoidMutationRequest() {
  
  return createUpdateTodoRequest()
}

export function createPutTodosTodoidMutationResponse(data?: Partial<PutTodosTodoidMutationResponse>): PutTodosTodoidMutationResponse {
  
  return data || faker.helpers.arrayElement<any>([createPutTodosTodoid200()])
}