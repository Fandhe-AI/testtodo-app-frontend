import { parseSubmission, report } from "@conform-to/react/future";
import { postTodos } from "@repo/shared-api-client/todo";
import type { RequestConfig } from "@repo/shared-config-kubb";
import type { CreateRequest } from "../../model";
import { createSchema } from "../schemas";

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
    const submission = parseSubmission(formData);
    const result = createSchema.safeParse(submission.payload);

    if (!result.success) {
      return report(submission, {
        error: {
          issues: result.error.issues,
        },
      });
    }

    const { title, description, priority, categoryId, dueDate } = result.data;

    try {
      await postTodos(
        {
          title,
          description,
          priority,
          category_id: categoryId,
          due_date: dueDate,
        },
        config,
      );

      return report(submission, {
        reset: true,
      });
    } catch (error) {
      return report(submission, {
        error: {
          formErrors: [
            String(error instanceof Error ? error.message : "Unknown error"),
          ],
        },
      });
    }
  };
};
