import fetch from "@repo/shared-config-kubb";
import type { GetTodosTodoidQueryResponse, GetTodosTodoidPathParams, GetTodosTodoid401, GetTodosTodoid404, GetTodosTodoid500 } from "../../../../../api-type/src/model/todo/todosController/GetTodosTodoid";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { getTodosTodoidQueryResponseSchema } from "../../../../../api-zod/src/model/todo/todosController/getTodosTodoidSchema";

function getGetTodosTodoidUrl(todoId: GetTodosTodoidPathParams["todoId"]) {
  const res = { method: 'GET', url: `/todos/${todoId}` as const }  
  return res
}

/**
 * @description 指定された ID の Todo アイテムの詳細を取得します。
 * @summary 特定の Todo の取得
 * {@link /todos/:todoId}
 */
export async function getTodosTodoid(todoId: GetTodosTodoidPathParams["todoId"], config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const res = await request<GetTodosTodoidQueryResponse, ResponseErrorConfig<GetTodosTodoid401 | GetTodosTodoid404 | GetTodosTodoid500>, unknown>({ method : "GET", url : getGetTodosTodoidUrl(todoId).url.toString(), ... requestConfig })  
  return getTodosTodoidQueryResponseSchema.parse(res.data)
}