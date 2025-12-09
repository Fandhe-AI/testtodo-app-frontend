import { z } from "zod/v4";

/**
 * @description Todo 更新時のリクエストボディ（部分更新対応）
 */
export const updateTodoRequestSchema = z.object({
    "title": z.optional(z.string().min(1).max(200).describe("Todo のタイトル")),
"description": z.string().max(1000).describe("Todo の詳細説明").nullish(),
"status": z.optional(z.enum(["pending", "completed"]).describe("Todo の完了状態")),
"priority": z.optional(z.enum(["low", "medium", "high"]).describe("Todo の優先度")),
"category_id": z.string().describe("関連するカテゴリの ID").nullish(),
"due_date": z.string().datetime().describe("期限日時（ISO 8601形式）").nullish()
    }).describe("Todo 更新時のリクエストボディ（部分更新対応）")