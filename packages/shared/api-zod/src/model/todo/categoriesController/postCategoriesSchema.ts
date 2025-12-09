import { categorySchema } from "../categorySchema";
import { createCategoryRequestSchema } from "../createCategoryRequestSchema";
import { customErrorSchema } from "../customErrorSchema";
import { z } from "zod/v4";

/**
 * @description カテゴリの作成に成功
 */
export const postCategories201Schema = z.lazy(() => categorySchema).describe("カテゴリを表現するオブジェクト")

/**
 * @description リクエストが不正です
 */
export const postCategories400Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description 認証が必要です
 */
export const postCategories401Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description バリデーションエラー
 */
export const postCategories422Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description サーバー内部エラー
 */
export const postCategories500Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

export const postCategoriesMutationRequestSchema = z.lazy(() => createCategoryRequestSchema).describe("カテゴリ作成時のリクエストボディ")

export const postCategoriesMutationResponseSchema = z.lazy(() => postCategories201Schema)