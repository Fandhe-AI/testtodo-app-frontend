import { z } from "zod/v4";

/**
 * @description 健康状態のレスポンス
 */
export const healthResponseSchema = z.object({
    "status": z.optional(z.string().describe("健康状態"))
    }).describe("健康状態のレスポンス")