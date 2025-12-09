import type { CustomError } from "../CustomError";
import type { Todo } from "../Todo";

export type GetTodosTodoidPathParams = {
    /**
     * @description Todo の一意識別子
     * @type string
    */
    todoId: string;
};

/**
 * @description Todo の取得に成功
*/
export type GetTodosTodoid200 = Todo;

/**
 * @description 認証が必要です
*/
export type GetTodosTodoid401 = CustomError;

/**
 * @description リソースが見つかりません
*/
export type GetTodosTodoid404 = CustomError;

/**
 * @description サーバー内部エラー
*/
export type GetTodosTodoid500 = CustomError;

export type GetTodosTodoidQueryResponse = GetTodosTodoid200;

export type GetTodosTodoidQuery = {
    Response: GetTodosTodoid200;
    PathParams: GetTodosTodoidPathParams;
    Errors: GetTodosTodoid401 | GetTodosTodoid404 | GetTodosTodoid500;
};