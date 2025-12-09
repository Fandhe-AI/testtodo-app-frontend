import type { Todo } from "@repo/entities-todo";
import type {
  createCreate,
  createDelete,
  createToggle,
} from "@repo/features-todo";
import type { Pagination } from "@repo/shared-api-type/todo";

/**
 * Todos ページの Search Params
 */
export type TodosPageSearchParams = {
  /**
   * Todo の完了状態でフィルタリング
   */
  status?: string;
  /**
   * カテゴリ ID でフィルタリング
   */
  category?: string;
  /**
   * 優先度でフィルタリング
   */
  priority?: string;
  /**
   * タイトルや説明での検索
   */
  search?: string;
  /**
   * ページ番号
   */
  page?: string;
};

/**
 * Todos ページ Props
 */
export type TodosPageProps = {
  /**
   * Todos ページの Search Params
   */
  searchParams: Promise<TodosPageSearchParams>;
  /**
   * Todo 追加のアクション
   */
  onAdd: ReturnType<typeof createCreate>;
  /**
   * Todo トグルのアクション
   */
  onToggle: ReturnType<typeof createToggle>;
  /**
   * Todo 削除のアクション
   */
  onDelete: ReturnType<typeof createDelete>;
  /**
   * ページタイトル
   */
  title?: string;
  /**
   * 初期データ
   */
  initialData: {
    todos: Todo[];
    pagination: Pagination;
  };
};
