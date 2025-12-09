import { z } from "zod/v4";

/**
 * @description ログアウト成功
 */
export const postSignOut200Schema = z.object({
    "success": z.optional(z.boolean())
    })

export const postSignOutMutationResponseSchema = z.lazy(() => postSignOut200Schema)