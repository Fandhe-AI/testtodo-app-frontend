import { customErrorSchema } from "../customErrorSchema";
import { customSuccessSchema } from "../customSuccessSchema";
import { z } from "zod/v4";

export const deleteTodosTodoidPathParamsSchema = z.object({
    "todoId": z.string().describe("Todo の一意識別子")
    })

/**
 * @description Todo の削除に成功
 */
export const deleteTodosTodoid200Schema = z.lazy(() => customSuccessSchema).describe("成功情報")

/**
 * @description 認証が必要です
 */
export const deleteTodosTodoid401Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description リソースが見つかりません
 */
export const deleteTodosTodoid404Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description サーバー内部エラー
 */
export const deleteTodosTodoid500Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

export const deleteTodosTodoidMutationResponseSchema = z.lazy(() => deleteTodosTodoid200Schema)