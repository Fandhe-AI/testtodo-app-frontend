"use client";

import type { Todo } from "@repo/entities-todo";
import { TodoCard } from "@repo/entities-todo/ui/card";
import { logger } from "@repo/shared-lib-pino";
import { useOptimistic, useState } from "react";
import type { createDelete } from "../../model/actions/delete";
import type { createToggle } from "../../model/actions/toggle";

type Props = {
  /**
   * 初期の Todo リスト
   */
  initialTodos: Todo[];
  /**
   * Todo 操作の Actions
   */
  onToggle: ReturnType<typeof createToggle>;
  /**
   * Todo 削除のアクション
   */
  onDelete: ReturnType<typeof createDelete>;
};

/**
 * Todo リストコンポーネント
 *
 * Todo の一覧を表示し、トグル・削除操作をサポートします。
 * 楽観的更新を使用してスムーズな UX を提供します。
 */
export const TodoList = ({ initialTodos, onToggle, onDelete }: Props) => {
  const [todos, setTodos] = useState(initialTodos);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);
  const [isPending, _setIsPending] = useState(false);

  // Todo トグル
  const handleToggle = async (todoId: Todo["id"]) => {
    // 楽観的更新
    setOptimisticTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              status: todo.status === "completed" ? "pending" : "completed",
            }
          : todo,
      ),
    );

    try {
      const updatedTodo = await onToggle(todoId);
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === todoId ? { ...todo, status: updatedTodo.status } : todo,
        ),
      );
    } catch (error) {
      logger.error("Failed to toggle todo: %s", error);
      // エラー時は元に戻す
      setTodos((prev) => prev);
    }
  };

  // Todo 削除
  const handleDelete = async (todoId: Todo["id"]) => {
    // 楽観的更新
    setOptimisticTodos((prev) => prev.filter((todo) => todo.id !== todoId));

    try {
      await onDelete(todoId);
      setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
    } catch (error) {
      logger.error("Failed to delete todo: %s", error);
      // エラー時は元に戻す
      setTodos((prev) => prev);
    }
  };

  if (optimisticTodos.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-[10px]">
        <p className="text-white/60">Todo がありません</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {optimisticTodos.map((todo) => (
        <TodoCard
          {...todo}
          key={todo.id}
          onToggle={handleToggle}
          onDelete={handleDelete}
          isPending={isPending}
        />
      ))}
    </div>
  );
};
