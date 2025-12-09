import { createTodoRequestSchema } from "../createTodoRequestSchema";
import { customErrorSchema } from "../customErrorSchema";
import { todoSchema } from "../todoSchema";
import { z } from "zod/v4";

/**
 * @description Todo の作成に成功
 */
export const postTodos201Schema = z.lazy(() => todoSchema).describe("Todo アイテムを表現するオブジェクト")

/**
 * @description リクエストが不正です
 */
export const postTodos400Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description 認証が必要です
 */
export const postTodos401Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description バリデーションエラー
 */
export const postTodos422Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description サーバー内部エラー
 */
export const postTodos500Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

export const postTodosMutationRequestSchema = z.lazy(() => createTodoRequestSchema).describe("Todo 作成時のリクエストボディ")

export const postTodosMutationResponseSchema = z.lazy(() => postTodos201Schema)