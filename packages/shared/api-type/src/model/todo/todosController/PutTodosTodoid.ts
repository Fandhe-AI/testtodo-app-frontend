import type { CustomError } from "../CustomError";
import type { Todo } from "../Todo";
import type { UpdateTodoRequest } from "../UpdateTodoRequest";

export type PutTodosTodoidPathParams = {
    /**
     * @description Todo の一意識別子
     * @type string
    */
    todoId: string;
};

/**
 * @description Todo の更新に成功
*/
export type PutTodosTodoid200 = Todo;

/**
 * @description リクエストが不正です
*/
export type PutTodosTodoid400 = CustomError;

/**
 * @description 認証が必要です
*/
export type PutTodosTodoid401 = CustomError;

/**
 * @description リソースが見つかりません
*/
export type PutTodosTodoid404 = CustomError;

/**
 * @description バリデーションエラー
*/
export type PutTodosTodoid422 = CustomError;

/**
 * @description サーバー内部エラー
*/
export type PutTodosTodoid500 = CustomError;

export type PutTodosTodoidMutationRequest = UpdateTodoRequest;

export type PutTodosTodoidMutationResponse = PutTodosTodoid200;

export type PutTodosTodoidMutation = {
    Response: PutTodosTodoid200;
    Request: PutTodosTodoidMutationRequest;
    PathParams: PutTodosTodoidPathParams;
    Errors: PutTodosTodoid400 | PutTodosTodoid401 | PutTodosTodoid404 | PutTodosTodoid422 | PutTodosTodoid500;
};