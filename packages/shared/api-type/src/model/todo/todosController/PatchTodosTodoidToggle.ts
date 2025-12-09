import type { CustomError } from "../CustomError";
import type { Todo } from "../Todo";

export type PatchTodosTodoidTogglePathParams = {
    /**
     * @description Todo の一意識別子
     * @type string
    */
    todoId: string;
};

/**
 * @description 完了状態の切り替えに成功
*/
export type PatchTodosTodoidToggle200 = Todo;

/**
 * @description 認証が必要です
*/
export type PatchTodosTodoidToggle401 = CustomError;

/**
 * @description リソースが見つかりません
*/
export type PatchTodosTodoidToggle404 = CustomError;

/**
 * @description サーバー内部エラー
*/
export type PatchTodosTodoidToggle500 = CustomError;

export type PatchTodosTodoidToggleMutationResponse = PatchTodosTodoidToggle200;

export type PatchTodosTodoidToggleMutation = {
    Response: PatchTodosTodoidToggle200;
    PathParams: PatchTodosTodoidTogglePathParams;
    Errors: PatchTodosTodoidToggle401 | PatchTodosTodoidToggle404 | PatchTodosTodoidToggle500;
};