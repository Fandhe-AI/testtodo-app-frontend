export const UpdateTodoRequestStatus = {
    "pending": "pending",
    "completed": "completed"
} as const;

type UpdateTodoRequestStatus = (typeof UpdateTodoRequestStatus)[keyof typeof UpdateTodoRequestStatus];

export const UpdateTodoRequestPriority = {
    "low": "low",
    "medium": "medium",
    "high": "high"
} as const;

type UpdateTodoRequestPriority = (typeof UpdateTodoRequestPriority)[keyof typeof UpdateTodoRequestPriority];

/**
 * @description Todo 更新時のリクエストボディ（部分更新対応）
*/
export type UpdateTodoRequest = {
    /**
     * @description Todo のタイトル
     * @minLength 1
     * @maxLength 200
     * @type string | undefined
    */
    title?: string | undefined;
    /**
     * @description Todo の詳細説明
     * @maxLength 1000
     * @type string
    */
    description?: (string | null) | undefined;
    /**
     * @description Todo の完了状態
     * @type string | undefined
    */
    status?: UpdateTodoRequestStatus | undefined;
    /**
     * @description Todo の優先度
     * @type string | undefined
    */
    priority?: UpdateTodoRequestPriority | undefined;
    /**
     * @description 関連するカテゴリの ID
     * @type string
    */
    category_id?: (string | null) | undefined;
    /**
     * @description 期限日時（ISO 8601形式）
     * @type string, date-time
    */
    due_date?: (string | null) | undefined;
};