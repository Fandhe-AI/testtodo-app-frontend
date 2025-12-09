import type { CustomError } from "../CustomError";
import type { CustomSuccess } from "../CustomSuccess";

export type DeleteTodosTodoidPathParams = {
    /**
     * @description Todo の一意識別子
     * @type string
    */
    todoId: string;
};

/**
 * @description Todo の削除に成功
*/
export type DeleteTodosTodoid200 = CustomSuccess;

/**
 * @description 認証が必要です
*/
export type DeleteTodosTodoid401 = CustomError;

/**
 * @description リソースが見つかりません
*/
export type DeleteTodosTodoid404 = CustomError;

/**
 * @description サーバー内部エラー
*/
export type DeleteTodosTodoid500 = CustomError;

export type DeleteTodosTodoidMutationResponse = DeleteTodosTodoid200;

export type DeleteTodosTodoidMutation = {
    Response: DeleteTodosTodoid200;
    PathParams: DeleteTodosTodoidPathParams;
    Errors: DeleteTodosTodoid401 | DeleteTodosTodoid404 | DeleteTodosTodoid500;
};