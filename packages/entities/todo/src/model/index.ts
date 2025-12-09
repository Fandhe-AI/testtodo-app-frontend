import type { Todo as TodoType } from "@repo/shared-api-type/todo";

export type Todo = {
  /**
   * @description Todo の一意識別子
   */
  id: TodoType["id"];
  /**
   * @description Todo のタイトル
   */
  title: TodoType["title"];
  /**
   * @description Todo の詳細説明
   */
  description?: TodoType["description"];
  /**
   * @description Todo の完了状態
   */
  status: TodoType["status"];
  /**
   * @description Todo の優先度
   */
  priority: TodoType["priority"];
  /**
   * @description 関連するカテゴリの ID
   */
  categoryId?: TodoType["category_id"];
  /**
   * @description Todo の期限日時
   */
  dueDate?: TodoType["due_date"];
  /**
   * @description Todo の作成日時
   */
  createdAt: TodoType["created_at"];
  /**
   * @description Todo の最終更新日時
   */
  updatedAt: TodoType["updated_at"];
};

export {
  TodoPriority,
  TodoStatus,
} from "@repo/shared-api-type/todo";

export type TodoPriority = TodoType["priority"];
export type TodoStatus = TodoType["status"];
