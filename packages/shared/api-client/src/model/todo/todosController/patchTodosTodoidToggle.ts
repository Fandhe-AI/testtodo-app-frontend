import fetch from "@repo/shared-config-kubb";
import type { PatchTodosTodoidToggleMutationResponse, PatchTodosTodoidTogglePathParams, PatchTodosTodoidToggle401, PatchTodosTodoidToggle404, PatchTodosTodoidToggle500 } from "../../../../../api-type/src/model/todo/todosController/PatchTodosTodoidToggle";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { patchTodosTodoidToggleMutationResponseSchema } from "../../../../../api-zod/src/model/todo/todosController/patchTodosTodoidToggleSchema";

function getPatchTodosTodoidToggleUrl(todoId: PatchTodosTodoidTogglePathParams["todoId"]) {
  const res = { method: 'PATCH', url: `/todos/${todoId}/toggle` as const }  
  return res
}

/**
 * @description Todo の完了状態を切り替えます。pending の場合は completed に、completed の場合は pending に変更されます。
 * @summary Todo の完了状態の切り替え
 * {@link /todos/:todoId/toggle}
 */
export async function patchTodosTodoidToggle(todoId: PatchTodosTodoidTogglePathParams["todoId"], config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const res = await request<PatchTodosTodoidToggleMutationResponse, ResponseErrorConfig<PatchTodosTodoidToggle401 | PatchTodosTodoidToggle404 | PatchTodosTodoidToggle500>, unknown>({ method : "PATCH", url : getPatchTodosTodoidToggleUrl(todoId).url.toString(), ... requestConfig })  
  return patchTodosTodoidToggleMutationResponseSchema.parse(res.data)
}