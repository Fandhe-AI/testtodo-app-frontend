import { deleteTodosTodoid } from "@repo/shared-api-client/todo";
import type { RequestConfig } from "@repo/shared-config-kubb";

/**
 * Todo を削除する Server Action
 */
export const createDelete = (config?: Partial<RequestConfig>) => {
  return async (todoId: string) => {
    const result = await deleteTodosTodoid(todoId, config);
    return result;
  };
};
