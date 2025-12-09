import { z } from "zod/v4";

/**
 * @description セッション情報
 */
export const authSessionInfoSchema = z.object({
    "id": z.string().describe("セッションの一意識別子"),
"userId": z.string().describe("ユーザーの一意識別子"),
"expiresAt": z.string().datetime().describe("セッションの有効期限")
    }).describe("セッション情報")