import { customErrorSchema } from "../customErrorSchema";
import { healthResponseSchema } from "../healthResponseSchema";
import { z } from "zod/v4";

/**
 * @description 健康状態の確認に成功
 */
export const getHealth200Schema = z.lazy(() => healthResponseSchema).describe("健康状態のレスポンス")

/**
 * @description サーバー内部エラー
 */
export const getHealth500Schema = z.lazy(() => customErrorSchema).describe("エラー情報")

export const getHealthQueryResponseSchema = z.lazy(() => getHealth200Schema)