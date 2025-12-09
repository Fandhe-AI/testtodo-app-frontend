import { categorySchema } from "../categorySchema";
import { customErrorSchema } from "../customErrorSchema";
import { z } from "zod/v4";

/**
 * @description カテゴリリストの取得に成功
 */
export const getCategories200Schema = z.object({
    get "data"(){
                return z.array(categorySchema.describe("カテゴリを表現するオブジェクト"))
              }
    })

/**
 * @description 認証が必要です
 */
export const getCategories401Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

/**
 * @description サーバー内部エラー
 */
export const getCategories500Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

export const getCategoriesQueryResponseSchema = z.lazy(() => getCategories200Schema)