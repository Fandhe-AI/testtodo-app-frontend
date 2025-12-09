import type { PostTodosMutationResponse } from "../../../../../api-type/src/model/todo/todosController/PostTodos";
import { createCreateTodoRequest } from "../createCreateTodoRequest";
import { createCustomError } from "../createCustomError";
import { createTodo } from "../createTodo";
import { faker } from "@faker-js/faker";

/**
 * @description Todo の作成に成功
 */
export function createPostTodos201() {
  
  return createTodo()
}

/**
 * @description リクエストが不正です
 */
export function createPostTodos400() {
  
  return createCustomError()
}

/**
 * @description 認証が必要です
 */
export function createPostTodos401() {
  
  return createCustomError()
}

/**
 * @description バリデーションエラー
 */
export function createPostTodos422() {
  
  return createCustomError()
}

/**
 * @description サーバー内部エラー
 */
export function createPostTodos500() {
  
  return createCustomError()
}

export function createPostTodosMutationRequest() {
  
  return createCreateTodoRequest()
}

export function createPostTodosMutationResponse(data?: Partial<PostTodosMutationResponse>): PostTodosMutationResponse {
  
  return data || faker.helpers.arrayElement<any>([createPostTodos201()])
}