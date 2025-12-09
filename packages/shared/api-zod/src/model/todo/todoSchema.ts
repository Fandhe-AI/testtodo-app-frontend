import { z } from "zod/v4";

/**
 * @description Todo アイテムを表現するオブジェクト
 */
export const todoSchema = z.object({
    "id": z.string().describe("Todo の一意識別子"),
"title": z.string().min(1).max(200).describe("Todo のタイトル（必須）"),
"description": z.string().max(1000).describe("Todo の詳細説明（任意）").nullish(),
"status": z.enum(["pending", "completed"]).describe("Todo の完了状態"),
"priority": z.enum(["low", "medium", "high"]).describe("Todo の優先度"),
"category_id": z.string().describe("関連するカテゴリの ID（任意）").nullish(),
"due_date": z.string().datetime().describe("期限日時（ISO 8601形式、任意）").nullish(),
"created_at": z.string().datetime().describe("作成日時（ISO 8601形式）"),
"updated_at": z.string().datetime().describe("最終更新日時（ISO 8601形式）")
    }).describe("Todo アイテムを表現するオブジェクト")