"use client";

import type { Todo } from "@repo/entities-todo";
import type {
  createCreate,
  createDelete,
  createToggle,
} from "@repo/features-todo";
import { TodoFormAdd } from "@repo/features-todo/ui/form/add";
import { TodoList } from "@repo/features-todo/ui/list";
import type { Pagination } from "@repo/shared-api-type/todo";
import { useState } from "react";
import type { TodosPageSearchParams } from "../../model";

type Props = {
  /**
   * Todos ページの Search Params
   */
  searchParams: Promise<TodosPageSearchParams>;
  /**
   * Todo 操作の Actions
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
   * @default "やることリスト"
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

/**
 * Todos ページのクライアントコンポーネント
 */
export const ClientPage = ({
  onAdd,
  onToggle,
  onDelete,
  title = "やることリスト",
  initialData,
}: Props) => {
  const [todos, setTodos] = useState(initialData.todos);

  const handleTodoAdded = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleToggle = async (todoId: string) => {
    // 楽観的更新
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              status: todo.status === "completed" ? "todo" : "completed",
            }
          : todo,
      ),
    );

    try {
      const result = await onToggle(todoId);
      return result;
    } catch {
      // エラー時は元に戻す
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === todoId
            ? {
                ...todo,
                status: todo.status === "completed" ? "todo" : "completed",
              }
            : todo,
        ),
      );
      throw new Error("Failed to toggle todo");
    }
  };

  const handleDelete = async (todoId: string) => {
    // 楽観的更新
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));

    try {
      const result = await onDelete(todoId);
      return result;
    } catch {
      // エラー時は元に戻す - 実際にはサーバーから再取得が必要
      throw new Error("Failed to delete todo");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      {/* ヘッダー */}
      <header className="border-slate-200 border-b bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-semibold text-2xl text-slate-900 dark:text-white">
            {title}
          </h1>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 bg-slate-50 px-6 py-8 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl space-y-4">
          {/* Todo 追加フォーム */}
          <TodoFormAdd action={onAdd} onTodoAdded={handleTodoAdded} />

          {/* Todo リスト */}
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
};
