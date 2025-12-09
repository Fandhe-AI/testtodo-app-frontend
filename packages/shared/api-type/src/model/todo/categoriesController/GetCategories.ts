import type { Category } from "../Category";
import type { CustomError } from "../CustomError";

/**
 * @description カテゴリリストの取得に成功
*/
export type GetCategories200 = {
    /**
     * @type array
    */
    data: Category[];
};

/**
 * @description 認証が必要です
*/
export type GetCategories401 = CustomError;

/**
 * @description サーバー内部エラー
*/
export type GetCategories500 = CustomError;

export type GetCategoriesQueryResponse = GetCategories200;

export type GetCategoriesQuery = {
    Response: GetCategories200;
    Errors: GetCategories401 | GetCategories500;
};