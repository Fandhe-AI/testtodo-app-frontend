import { z } from "zod/v4";

/**
 * @description カテゴリを表現するオブジェクト
 */
export const categorySchema = z.object({
    "id": z.string().describe("カテゴリの一意識別子"),
"name": z.string().min(1).max(50).describe("カテゴリ名"),
"description": z.string().max(200).describe("カテゴリの説明").nullish(),
"color": z.string().regex(/^#[0-9a-fA-F]{6}$/).describe("カテゴリの表示色（HEXカラーコード）"),
"created_at": z.string().datetime().describe("作成日時（ISO 8601形式）")
    }).describe("カテゴリを表現するオブジェクト")