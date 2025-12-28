"use client";

import type { Todo } from "@repo/entities-todo";
import { TodoCard } from "@repo/entities-todo/ui/card";

type Props = {
  /**
   * Todo リスト
   */
  todos: Todo[];
  /**
   * Todo トグルのコールバック
   */
  onToggle: (todoId: string) => void;
  /**
   * Todo 削除のコールバック
   */
  onDelete: (todoId: string) => void;
};

/**
 * Todo リストコンポーネント
 *
 * Todo の一覧を表示し、トグル・削除操作をサポートします。
 */
export const TodoList = ({ todos, onToggle, onDelete }: Props) => {
  if (todos.length === 0) {
    return (
      <div className="rounded-lg border border-slate-300 border-dashed bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
          <svg
            className="h-6 w-6 text-slate-400 dark:text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            role="img"
            aria-label="タスクなし"
          >
            <title>タスクなし</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <p className="text-slate-600 text-sm dark:text-slate-400">
          タスクがありません
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          {...todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
