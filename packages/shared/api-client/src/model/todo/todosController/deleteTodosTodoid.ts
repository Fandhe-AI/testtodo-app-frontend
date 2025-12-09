import fetch from "@repo/shared-config-kubb";
import type { DeleteTodosTodoidMutationResponse, DeleteTodosTodoidPathParams, DeleteTodosTodoid401, DeleteTodosTodoid404, DeleteTodosTodoid500 } from "../../../../../api-type/src/model/todo/todosController/DeleteTodosTodoid";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { deleteTodosTodoidMutationResponseSchema } from "../../../../../api-zod/src/model/todo/todosController/deleteTodosTodoidSchema";

function getDeleteTodosTodoidUrl(todoId: DeleteTodosTodoidPathParams["todoId"]) {
  const res = { method: 'DELETE', url: `/todos/${todoId}` as const }  
  return res
}

/**
 * @description 指定された ID の Todo アイテムを削除します。この操作は元に戻せません。
 * @summary Todo の削除
 * {@link /todos/:todoId}
 */
export async function deleteTodosTodoid(todoId: DeleteTodosTodoidPathParams["todoId"], config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const res = await request<DeleteTodosTodoidMutationResponse, ResponseErrorConfig<DeleteTodosTodoid401 | DeleteTodosTodoid404 | DeleteTodosTodoid500>, unknown>({ method : "DELETE", url : getDeleteTodosTodoidUrl(todoId).url.toString(), ... requestConfig })  
  return deleteTodosTodoidMutationResponseSchema.parse(res.data)
}