import { z } from "zod/v4";

/**
 * @description 成功情報
 */
export const customSuccessSchema = z.object({
    "success": z.boolean().describe("成功フラグ"),
"message": z.optional(z.string().describe("成功メッセージ"))
    }).describe("成功情報")