import { customErrorSchema } from "../customErrorSchema";
import { todoSchema } from "../todoSchema";
import { z } from "zod/v4";

export const getTodosTodoidPathParamsSchema = z.object({
    "todoId": z.string().describe("Todo の一意識別子")
    })

/**
 * @description Todo の取得に成功
 */
export const getTodosTodoid200Schema = z.lazy(() => todoSchema).describe("Todo アイテムを表現するオブジェクト")

/**
 * @description 認証が必要です
 */
export const getTodosTodoid401Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description リソースが見つかりません
 */
export const getTodosTodoid404Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description サーバー内部エラー
 */
export const getTodosTodoid500Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

export const getTodosTodoidQueryResponseSchema = z.lazy(() => getTodosTodoid200Schema)