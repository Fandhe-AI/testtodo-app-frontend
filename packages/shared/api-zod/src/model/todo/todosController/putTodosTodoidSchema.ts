import { customErrorSchema } from "../customErrorSchema";
import { todoSchema } from "../todoSchema";
import { updateTodoRequestSchema } from "../updateTodoRequestSchema";
import { z } from "zod/v4";

export const putTodosTodoidPathParamsSchema = z.object({
    "todoId": z.string().describe("Todo の一意識別子")
    })

/**
 * @description Todo の更新に成功
 */
export const putTodosTodoid200Schema = z.lazy(() => todoSchema).describe("Todo アイテムを表現するオブジェクト")

/**
 * @description リクエストが不正です
 */
export const putTodosTodoid400Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description 認証が必要です
 */
export const putTodosTodoid401Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description リソースが見つかりません
 */
export const putTodosTodoid404Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description バリデーションエラー
 */
export const putTodosTodoid422Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description サーバー内部エラー
 */
export const putTodosTodoid500Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

export const putTodosTodoidMutationRequestSchema = z.lazy(() => updateTodoRequestSchema).describe("Todo 更新時のリクエストボディ（部分更新対応）")

export const putTodosTodoidMutationResponseSchema = z.lazy(() => putTodosTodoid200Schema)