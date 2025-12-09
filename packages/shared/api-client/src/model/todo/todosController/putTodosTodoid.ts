import fetch from "@repo/shared-config-kubb";
import type { PutTodosTodoidMutationRequest, PutTodosTodoidMutationResponse, PutTodosTodoidPathParams, PutTodosTodoid400, PutTodosTodoid401, PutTodosTodoid404, PutTodosTodoid422, PutTodosTodoid500 } from "../../../../../api-type/src/model/todo/todosController/PutTodosTodoid";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { putTodosTodoidMutationResponseSchema, putTodosTodoidMutationRequestSchema } from "../../../../../api-zod/src/model/todo/todosController/putTodosTodoidSchema";

function getPutTodosTodoidUrl(todoId: PutTodosTodoidPathParams["todoId"]) {
  const res = { method: 'PUT', url: `/todos/${todoId}` as const }  
  return res
}

/**
 * @description 指定された ID の Todo アイテムを更新します。部分的な更新も可能です（提供されたフィールドのみが更新されます）。
 * @summary Todo の更新
 * {@link /todos/:todoId}
 */
export async function putTodosTodoid(todoId: PutTodosTodoidPathParams["todoId"], data?: PutTodosTodoidMutationRequest, config: Partial<RequestConfig<PutTodosTodoidMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const requestData = putTodosTodoidMutationRequestSchema.parse(data)  
  
  const res = await request<PutTodosTodoidMutationResponse, ResponseErrorConfig<PutTodosTodoid400 | PutTodosTodoid401 | PutTodosTodoid404 | PutTodosTodoid422 | PutTodosTodoid500>, PutTodosTodoidMutationRequest>({ method : "PUT", url : getPutTodosTodoidUrl(todoId).url.toString(), data : requestData, ... requestConfig })  
  return putTodosTodoidMutationResponseSchema.parse(res.data)
}