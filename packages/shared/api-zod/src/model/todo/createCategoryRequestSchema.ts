import { z } from "zod/v4";

/**
 * @description カテゴリ作成時のリクエストボディ
 */
export const createCategoryRequestSchema = z.object({
    "name": z.string().min(1).max(50).describe("カテゴリ名（必須）"),
"description": z.string().max(200).describe("カテゴリの説明（任意）").nullish(),
"color": z.string().regex(/^#[0-9a-fA-F]{6}$/).describe("カテゴリの表示色（HEXカラーコード、必須）")
    }).describe("カテゴリ作成時のリクエストボディ")