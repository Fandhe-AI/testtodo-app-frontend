import { coerceFormValue } from "@conform-to/zod/v4/future";
import {
  signInEmailRequestSchema,
  signUpEmailRequestSchema,
} from "@repo/shared-api-zod/auth";
import { z } from "zod/v4";

/**
 * ログインフォームのスキーマ
 */
export const loginSchema = coerceFormValue(
  z.object({
    ...signInEmailRequestSchema.shape,
    callbackURL: z.string().optional(),
  }),
);

/**
 * 登録フォームのスキーマ
 */
export const registerSchema = coerceFormValue(
  z.object({
    ...signUpEmailRequestSchema.shape,
    callbackURL: z.string().optional(),
  }),
);
