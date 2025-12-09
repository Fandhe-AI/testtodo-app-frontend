import { patchTodosTodoidToggle } from "@repo/shared-api-client/todo";
import type { RequestConfig } from "@repo/shared-config-kubb";

/**
 * Todo の完了状態をトグルするアクション
 */
export const createToggle = (config?: Partial<RequestConfig>) => {
  return async (todoId: string) => {
    const result = await patchTodosTodoidToggle(todoId, config);
    return result;
  };
};
