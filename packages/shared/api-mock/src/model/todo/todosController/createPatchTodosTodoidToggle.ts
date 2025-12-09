import type { PatchTodosTodoidTogglePathParams, PatchTodosTodoidToggleMutationResponse } from "../../../../../api-type/src/model/todo/todosController/PatchTodosTodoidToggle";
import { createCustomError } from "../createCustomError";
import { createTodo } from "../createTodo";
import { faker } from "@faker-js/faker";

export function createPatchTodosTodoidTogglePathParams(data?: Partial<PatchTodosTodoidTogglePathParams>): PatchTodosTodoidTogglePathParams {
  
  return {
  ...{"todoId": faker.string.alpha()},
  ...data || {}
  }
}

/**
 * @description 完了状態の切り替えに成功
 */
export function createPatchTodosTodoidToggle200() {
  
  return createTodo()
}

/**
 * @description 認証が必要です
 */
export function createPatchTodosTodoidToggle401() {
  
  return createCustomError()
}

/**
 * @description リソースが見つかりません
 */
export function createPatchTodosTodoidToggle404() {
  
  return createCustomError()
}

/**
 * @description サーバー内部エラー
 */
export function createPatchTodosTodoidToggle500() {
  
  return createCustomError()
}

export function createPatchTodosTodoidToggleMutationResponse(data?: Partial<PatchTodosTodoidToggleMutationResponse>): PatchTodosTodoidToggleMutationResponse {
  
  return data || faker.helpers.arrayElement<any>([createPatchTodosTodoidToggle200()])
}