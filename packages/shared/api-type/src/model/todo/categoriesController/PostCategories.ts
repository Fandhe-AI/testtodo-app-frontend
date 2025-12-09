import type { Category } from "../Category";
import type { CreateCategoryRequest } from "../CreateCategoryRequest";
import type { CustomError } from "../CustomError";

/**
 * @description カテゴリの作成に成功
*/
export type PostCategories201 = Category;

/**
 * @description リクエストが不正です
*/
export type PostCategories400 = CustomError;

/**
 * @description 認証が必要です
*/
export type PostCategories401 = CustomError;

/**
 * @description バリデーションエラー
*/
export type PostCategories422 = CustomError;

/**
 * @description サーバー内部エラー
*/
export type PostCategories500 = CustomError;

export type PostCategoriesMutationRequest = CreateCategoryRequest;

export type PostCategoriesMutationResponse = PostCategories201;

export type PostCategoriesMutation = {
    Response: PostCategories201;
    Request: PostCategoriesMutationRequest;
    Errors: PostCategories400 | PostCategories401 | PostCategories422 | PostCategories500;
};