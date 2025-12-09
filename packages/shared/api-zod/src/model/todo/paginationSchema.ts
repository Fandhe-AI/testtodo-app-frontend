import { z } from "zod/v4";

/**
 * @description ページネーション情報
 */
export const paginationSchema = z.object({
    "page": z.int().min(1).describe("現在のページ番号"),
"limit": z.int().min(1).describe("1ページあたりの件数"),
"total": z.int().min(0).describe("総件数"),
"total_pages": z.int().min(0).describe("総ページ数")
    }).describe("ページネーション情報")