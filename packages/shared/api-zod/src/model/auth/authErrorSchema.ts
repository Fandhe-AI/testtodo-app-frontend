import { z } from "zod/v4";

/**
 * @description 認証エラー
 */
export const authErrorSchema = z.object({
    "code": z.enum(["INVALID_CREDENTIALS", "USER_NOT_FOUND", "USER_ALREADY_EXISTS", "INVALID_EMAIL", "WEAK_PASSWORD", "SESSION_EXPIRED", "UNAUTHORIZED"]).describe("エラーコード"),
"message": z.string().describe("エラーメッセージ")
    }).describe("認証エラー")