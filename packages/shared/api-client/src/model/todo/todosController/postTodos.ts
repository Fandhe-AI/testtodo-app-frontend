import fetch from "@repo/shared-config-kubb";
import type { PostTodosMutationRequest, PostTodosMutationResponse, PostTodos400, PostTodos401, PostTodos422, PostTodos500 } from "../../../../../api-type/src/model/todo/todosController/PostTodos";
import type { RequestConfig, ResponseErrorConfig } from "@repo/shared-config-kubb";
import { postTodosMutationResponseSchema, postTodosMutationRequestSchema } from "../../../../../api-zod/src/model/todo/todosController/postTodosSchema";

function getPostTodosUrl() {
  const res = { method: 'POST', url: `/todos` as const }  
  return res
}

/**
 * @description 新しい Todo アイテムを作成します。タイトルは必須項目です。
 * @summary 新しい Todo の作成
 * {@link /todos}
 */
export async function postTodos(data: PostTodosMutationRequest, config: Partial<RequestConfig<PostTodosMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config  
  
  const requestData = postTodosMutationRequestSchema.parse(data)  
  
  const res = await request<PostTodosMutationResponse, ResponseErrorConfig<PostTodos400 | PostTodos401 | PostTodos422 | PostTodos500>, PostTodosMutationRequest>({ method : "POST", url : getPostTodosUrl().url.toString(), data : requestData, ... requestConfig })  
  return postTodosMutationResponseSchema.parse(res.data)
}