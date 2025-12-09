export const TodoStatus = {
    "pending": "pending",
    "completed": "completed"
} as const;

type TodoStatus = (typeof TodoStatus)[keyof typeof TodoStatus];

export const TodoPriority = {
    "low": "low",
    "medium": "medium",
    "high": "high"
} as const;

type TodoPriority = (typeof TodoPriority)[keyof typeof TodoPriority];

/**
 * @description Todo アイテムを表現するオブジェクト
*/
export type Todo = {
    /**
     * @description Todo の一意識別子
     * @type string
    */
    id: string;
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
     * @description Todo の完了状態
     * @type string
    */
    status: TodoStatus;
    /**
     * @description Todo の優先度
     * @type string
    */
    priority: TodoPriority;
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
    /**
     * @description 作成日時（ISO 8601形式）
     * @type string, date-time
    */
    created_at: string;
    /**
     * @description 最終更新日時（ISO 8601形式）
     * @type string, date-time
    */
    updated_at: string;
};