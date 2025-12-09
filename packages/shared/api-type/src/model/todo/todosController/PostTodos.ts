import type { CreateTodoRequest } from "../CreateTodoRequest";
import type { CustomError } from "../CustomError";
import type { Todo } from "../Todo";

/**
 * @description Todo の作成に成功
*/
export type PostTodos201 = Todo;

/**
 * @description リクエストが不正です
*/
export type PostTodos400 = CustomError;

/**
 * @description 認証が必要です
*/
export type PostTodos401 = CustomError;

/**
 * @description バリデーションエラー
*/
export type PostTodos422 = CustomError;

/**
 * @description サーバー内部エラー
*/
export type PostTodos500 = CustomError;

export type PostTodosMutationRequest = CreateTodoRequest;

export type PostTodosMutationResponse = PostTodos201;

export type PostTodosMutation = {
    Response: PostTodos201;
    Request: PostTodosMutationRequest;
    Errors: PostTodos400 | PostTodos401 | PostTodos422 | PostTodos500;
};