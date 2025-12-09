export const CreateTodoRequestPriority = {
    "low": "low",
    "medium": "medium",
    "high": "high"
} as const;

type CreateTodoRequestPriority = (typeof CreateTodoRequestPriority)[keyof typeof CreateTodoRequestPriority];

/**
 * @description Todo 作成時のリクエストボディ
*/
export type CreateTodoRequest = {
    /**
     * @description Todo のタイトル（必須）
     * @minLength 1
     * @maxLength 200
     * @type string
    */
    title: string;
    /**
     * @description Todo の詳細説明（任意）
     * @maxLength 1000
     * @type string
    */
    description?: (string | null) | undefined;
    /**
     * @description Todo の優先度（デフォルト: medium）
     * @default "medium"
     * @type string | undefined
    */
    priority?: CreateTodoRequestPriority | undefined;
    /**
     * @description 関連するカテゴリの ID（任意）
     * @type string
    */
    category_id?: (string | null) | undefined;
    /**
     * @description 期限日時（ISO 8601形式、任意）
     * @type string, date-time
    */
    due_date?: (string | null) | undefined;
};