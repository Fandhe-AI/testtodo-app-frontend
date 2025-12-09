import { coerceFormValue } from "@conform-to/zod/v4/future";
import { createTodoRequestSchema } from "@repo/shared-api-zod/todo";
import { z } from "zod/v4";

export const createSchema = coerceFormValue(
  z.object({
    title: createTodoRequestSchema.shape.title,
    description: createTodoRequestSchema.shape.description,
    priority: createTodoRequestSchema.shape.priority,
    categoryId: createTodoRequestSchema.shape.category_id,
    dueDate: createTodoRequestSchema.shape.due_date,
  }),
);
