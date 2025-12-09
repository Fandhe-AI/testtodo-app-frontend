import { z } from "zod/v4";

/**
 * @description メール登録のリクエストボディ
 */
export const signUpEmailRequestSchema = z.object({
    "email": z.email().describe("メールアドレス"),
"password": z.string().min(8).describe("パスワード（8文字以上）"),
"name": z.string().min(1).max(100).describe("ユーザー名")
    }).describe("メール登録のリクエストボディ")