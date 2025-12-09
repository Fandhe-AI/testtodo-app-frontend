import { getTodos as apiGetTodos } from "@repo/shared-api-client/todo";
import type { GetTodosQueryParams } from "@repo/shared-api-type/todo";
import type { RequestConfig } from "@repo/shared-config-kubb";

/**
 * Todo リストを取得するアクション
 */
export const createGet = (config?: Partial<RequestConfig>) => {
  return async (params?: GetTodosQueryParams) => {
    const result = await apiGetTodos(params, config);
    return {
      data: result.data.map((todo) => ({
        id: todo.id,
        title: todo.title,
        status: todo.status,
        priority: todo.priority,
        categoryId: todo.category_id,
        dueDate: todo.due_date,
        createdAt: todo.created_at,
        updatedAt: todo.updated_at,
      })),
      pagination: result.pagination,
    };
  };
};
