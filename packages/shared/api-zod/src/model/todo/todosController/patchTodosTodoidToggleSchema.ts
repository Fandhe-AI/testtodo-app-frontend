import { customErrorSchema } from "../customErrorSchema";
import { todoSchema } from "../todoSchema";
import { z } from "zod/v4";

export const patchTodosTodoidTogglePathParamsSchema = z.object({
    "todoId": z.string().describe("Todo の一意識別子")
    })

/**
 * @description 完了状態の切り替えに成功
 */
export const patchTodosTodoidToggle200Schema = z.lazy(() => todoSchema).describe("Todo アイテムを表現するオブジェクト")

/**
 * @description 認証が必要です
 */
export const patchTodosTodoidToggle401Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description リソースが見つかりません
 */
export const patchTodosTodoidToggle404Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description サーバー内部エラー
 */
export const patchTodosTodoidToggle500Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

export const patchTodosTodoidToggleMutationResponseSchema = z.lazy(() => patchTodosTodoidToggle200Schema)