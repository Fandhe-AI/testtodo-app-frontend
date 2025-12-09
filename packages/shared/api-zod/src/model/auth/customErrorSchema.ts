import { z } from "zod/v4";

/**
 * @description エラー情報
 */
export const customErrorSchema = z.object({
    "error": z.object({
    "code": z.string().describe("エラーコード"),
"message": z.string().describe("エラーメッセージ"),
"details": z.optional(z.array(z.object({
    "field": z.string().describe("エラーが発生したフィールド名"),
"message": z.string().describe("フィールド固有のエラーメッセージ")
    })).describe("詳細なエラー情報（バリデーションエラー時など）"))
    })
    }).describe("エラー情報")