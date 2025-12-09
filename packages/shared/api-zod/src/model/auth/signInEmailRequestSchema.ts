import { z } from "zod/v4";

/**
 * @description メールログインのリクエストボディ
 */
export const signInEmailRequestSchema = z.object({
    "email": z.email().describe("メールアドレス"),
"password": z.string().min(8).describe("パスワード")
    }).describe("メールログインのリクエストボディ")