import type { Todo } from "@repo/entities-todo";
import { postTodos } from "@repo/shared-api-client/todo";
import type { RequestConfig } from "@repo/shared-config-kubb";
import type { CreateRequest } from "../../model";

/**
 * Todo を作成する Server Action
 *
 * @param config - APIリクエスト設定
 * @returns Todo作成アクション
 */
export const createCreate = (
  config?: Partial<RequestConfig<CreateRequest>>,
) => {
  return async (_prevState: unknown, formData: FormData) => {
    const title = formData.get("title");
    const priority = formData.get("priority");

    if (!title || typeof title !== "string" || title.trim() === "") {
      return {
        error: "タイトルを入力してください",
      };
    }

    if (!priority || typeof priority !== "string") {
      return {
        error: "優先度を選択してください",
      };
    }

    try {
      const response = await postTodos(
        {
          title: title.trim(),
          priority: priority as "low" | "medium" | "high",
        },
        config,
      );

      // APIレスポンス（snake_case）をTodo型（camelCase）に変換
      const newTodo: Todo = {
        id: response.id,
        title: response.title,
        description: response.description,
        status: response.status,
        priority: response.priority,
        categoryId: response.category_id,
        dueDate: response.due_date,
        createdAt: response.created_at,
        updatedAt: response.updated_at,
      };

      return {
        success: true,
        value: newTodo,
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  };
};
