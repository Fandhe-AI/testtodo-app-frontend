import type { CustomError } from "../CustomError";
import type { Pagination } from "../Pagination";
import type { Todo } from "../Todo";

export const GetTodosQueryParamsStatus = {
    "pending": "pending",
    "completed": "completed",
    "all": "all"
} as const;

type GetTodosQueryParamsStatus = (typeof GetTodosQueryParamsStatus)[keyof typeof GetTodosQueryParamsStatus];

export const GetTodosQueryParamsPriority = {
    "low": "low",
    "medium": "medium",
    "high": "high"
} as const;

type GetTodosQueryParamsPriority = (typeof GetTodosQueryParamsPriority)[keyof typeof GetTodosQueryParamsPriority];

export const GetTodosQueryParamsSort = {
    "created_at": "created_at",
    "updated_at": "updated_at",
    "due_date": "due_date",
    "priority": "priority",
    "title": "title"
} as const;

type GetTodosQueryParamsSort = (typeof GetTodosQueryParamsSort)[keyof typeof GetTodosQueryParamsSort];

export const GetTodosQueryParamsOrder = {
    "asc": "asc",
    "desc": "desc"
} as const;

type GetTodosQueryParamsOrder = (typeof GetTodosQueryParamsOrder)[keyof typeof GetTodosQueryParamsOrder];

export type GetTodosQueryParams = {
    /**
     * @description Todo の完了状態でフィルタリング
     * @default "all"
     * @type string | undefined
    */
    status?: GetTodosQueryParamsStatus | undefined;
    /**
     * @description カテゴリ ID でフィルタリング
     * @type string | undefined
    */
    category?: string | undefined;
    /**
     * @description 優先度でフィルタリング
     * @type string | undefined
    */
    priority?: GetTodosQueryParamsPriority | undefined;
    /**
     * @description タイトルや説明での検索
     * @type string | undefined
    */
    search?: string | undefined;
    /**
     * @description ページ番号（1から開始）
     * @minLength 1
     * @default 1
     * @type integer | undefined
    */
    page?: number | undefined;
    /**
     * @description 1ページあたりの件数
     * @minLength 1
     * @maxLength 100
     * @default 20
     * @type integer | undefined
    */
    limit?: number | undefined;
    /**
     * @description 並び替えフィールド
     * @default "created_at"
     * @type string | undefined
    */
    sort?: GetTodosQueryParamsSort | undefined;
    /**
     * @description 並び替え順序
     * @default "desc"
     * @type string | undefined
    */
    order?: GetTodosQueryParamsOrder | undefined;
};

/**
 * @description Todo リストの取得に成功
*/
export type GetTodos200 = {
    /**
     * @type array
    */
    data: Todo[];
    /**
     * @description ページネーション情報
     * @type object
    */
    pagination: Pagination;
};

/**
 * @description リクエストが不正です
*/
export type GetTodos400 = CustomError;

/**
 * @description 認証が必要です
*/
export type GetTodos401 = CustomError;

/**
 * @description サーバー内部エラー
*/
export type GetTodos500 = CustomError;

export type GetTodosQueryResponse = GetTodos200;

export type GetTodosQuery = {
    Response: GetTodos200;
    QueryParams: GetTodosQueryParams;
    Errors: GetTodos400 | GetTodos401 | GetTodos500;
};