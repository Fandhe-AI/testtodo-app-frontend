import fetch from "@repo/shared-config-kubb";
import type { GetTodosQueryResponse, GetTodosQueryParams, GetTodos400, GetTodos401, GetTodos500 } from "../../../../../api-type/src/model/todo/todosController/GetTodos";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { getTodosQueryResponseSchema } from "../../../../../api-zod/src/model/todo/todosController/getTodosSchema";

function getGetTodosUrl() {
  const res = { method: 'GET', url: `/todos` as const }  
  return res
}

/**
 * @description Todo アイテムのリストを取得します。クエリパラメータを使用してフィルタリングや並び替えが可能です。
 * @summary Todo リストの取得
 * {@link /todos}
 */
export async function getTodos(params?: GetTodosQueryParams, config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const res = await request<GetTodosQueryResponse, ResponseErrorConfig<GetTodos400 | GetTodos401 | GetTodos500>, unknown>({ method : "GET", url : getGetTodosUrl().url.toString(), params, ... requestConfig })  
  return getTodosQueryResponseSchema.parse(res.data)
}