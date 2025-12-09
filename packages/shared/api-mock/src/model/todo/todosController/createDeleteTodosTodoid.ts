import type { DeleteTodosTodoidPathParams, DeleteTodosTodoidMutationResponse } from "../../../../../api-type/src/model/todo/todosController/DeleteTodosTodoid";
import { createCustomError } from "../createCustomError";
import { createCustomSuccess } from "../createCustomSuccess";
import { faker } from "@faker-js/faker";

export function createDeleteTodosTodoidPathParams(data?: Partial<DeleteTodosTodoidPathParams>): DeleteTodosTodoidPathParams {
  
  return {
  ...{"todoId": faker.string.alpha()},
  ...data || {}
  }
}

/**
 * @description Todo の削除に成功
 */
export function createDeleteTodosTodoid200() {
  
  return createCustomSuccess()
}

/**
 * @description 認証が必要です
 */
export function createDeleteTodosTodoid401() {
  
  return createCustomError()
}

/**
 * @description リソースが見つかりません
 */
export function createDeleteTodosTodoid404() {
  
  return createCustomError()
}

/**
 * @description サーバー内部エラー
 */
export function createDeleteTodosTodoid500() {
  
  return createCustomError()
}

export function createDeleteTodosTodoidMutationResponse(data?: Partial<DeleteTodosTodoidMutationResponse>): DeleteTodosTodoidMutationResponse {
  
  return data || faker.helpers.arrayElement<any>([createDeleteTodosTodoid200()])
}