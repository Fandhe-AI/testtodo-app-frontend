import { customErrorSchema } from "../customErrorSchema";
import { paginationSchema } from "../paginationSchema";
import { todoSchema } from "../todoSchema";
import { z } from "zod/v4";

export const getTodosQueryParamsSchema = z.object({
    "status": z.enum(["pending", "completed", "all"]).default("all").describe("Todo の完了状態でフィルタリング"),
"category": z.optional(z.string().describe("カテゴリ ID でフィルタリング")),
"priority": z.optional(z.enum(["low", "medium", "high"]).describe("優先度でフィルタリング")),
"search": z.optional(z.string().describe("タイトルや説明での検索")),
"page": z.coerce.number().int().min(1).default(1).describe("ページ番号（1から開始）"),
"limit": z.coerce.number().int().min(1).max(100).default(20).describe("1ページあたりの件数"),
"sort": z.enum(["created_at", "updated_at", "due_date", "priority", "title"]).default("created_at").describe("並び替えフィールド"),
"order": z.enum(["asc", "desc"]).default("desc").describe("並び替え順序")
    })

/**
 * @description Todo リストの取得に成功
 */
export const getTodos200Schema = z.object({
    get "data"(){
                return z.array(todoSchema.describe("Todo アイテムを表現するオブジェクト"))
              },
get "pagination"(){
                return paginationSchema.describe("ページネーション情報")
              }
    })

/**
 * @description リクエストが不正です
 */
export const getTodos400Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description 認証が必要です
 */
export const getTodos401Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description サーバー内部エラー
 */
export const getTodos500Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

export const getTodosQueryResponseSchema = z.lazy(() => getTodos200Schema)