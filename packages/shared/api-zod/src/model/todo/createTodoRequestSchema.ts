import { z } from "zod/v4";

/**
 * @description Todo 作成時のリクエストボディ
 */
export const createTodoRequestSchema = z.object({
    "title": z.string().min(1).max(200).describe("Todo のタイトル（必須）"),
"description": z.string().max(1000).describe("Todo の詳細説明（任意）").nullish(),
"priority": z.optional(z.enum(["low", "medium", "high"]).default("medium").describe("Todo の優先度（デフォルト: medium）")),
"category_id": z.string().describe("関連するカテゴリの ID（任意）").nullish(),
"due_date": z.string().datetime().describe("期限日時（ISO 8601形式、任意）").nullish()
    }).describe("Todo 作成時のリクエストボディ")