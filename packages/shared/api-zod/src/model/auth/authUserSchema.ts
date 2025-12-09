import { z } from "zod/v4";

/**
 * @description 認証ユーザー情報
 */
export const authUserSchema = z.object({
    "id": z.string().describe("ユーザーの一意識別子"),
"email": z.email().describe("メールアドレス"),
"name": z.optional(z.string().describe("ユーザー名")),
"emailVerified": z.boolean().describe("メールアドレスが確認済みかどうか"),
"image": z.string().describe("プロフィール画像の URL").nullish(),
"createdAt": z.string().datetime().describe("アカウント作成日時"),
"updatedAt": z.string().datetime().describe("最終更新日時")
    }).describe("認証ユーザー情報")