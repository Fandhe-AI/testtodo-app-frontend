"use client";

import type { Todo, TodoPriority } from "@repo/entities-todo";
import { TodoButton } from "@repo/entities-todo/ui/button";
import { useActionState, useEffect, useRef, useState } from "react";
import type { createCreate } from "../../../model/actions/create";
import { TodoPrioritySelector } from "../../priority-selector";

type Props = {
  /**
   * フォーム送信時のアクション
   */
  action: ReturnType<typeof createCreate>;
  /**
   * Todo追加成功時のコールバック
   */
  onTodoAdded?: (todo: Todo) => void;
};

/**
 * Todo 追加フォームコンポーネント
 *
 * 新しい Todo を作成するためのシンプルなフォームです。
 */
export const TodoFormAdd = ({ action: formAction, onTodoAdded }: Props) => {
  const [lastResult, action, isPending] = useActionState(formAction, null);
  const formRef = useRef<HTMLFormElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState<TodoPriority>("medium");

  // 新しいtodoが追加されたら親に通知してフォームをリセット
  useEffect(() => {
    console.log("=== lastResult ===", lastResult);
    if (lastResult?.success && lastResult.value && onTodoAdded) {
      console.log("Adding todo:", lastResult.value);
      onTodoAdded(lastResult.value);
      // フォームとinputをリセット
      formRef.current?.reset();
      setInputValue("");
      setPriority("medium");
    }
  }, [lastResult, onTodoAdded]);

  return (
    <form
      ref={formRef}
      action={action}
      className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
    >
      <fieldset disabled={isPending}>
        <div className="space-y-3">
          {/* タイトル入力 */}
          <div className="flex gap-2">
            <input
              type="text"
              name="title"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="新しいタスクを追加..."
              className={[
                "flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5",
                "text-slate-900 text-sm placeholder-slate-400",
                "transition-colors duration-150",
                "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                "dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500",
                "dark:focus:border-blue-500 dark:focus:ring-blue-500",
              ].join(" ")}
            />
            <TodoButton
              type="submit"
              variant="primary"
              size="md"
              startIcon="plus"
              loading={isPending}
            >
              追加
            </TodoButton>
          </div>

          {/* 優先度選択 */}
          <TodoPrioritySelector
            value={priority}
            onChange={setPriority}
            disabled={isPending}
          />
        </div>

        {lastResult?.error && (
          <div className="mt-2 text-red-600 text-sm dark:text-red-400">
            {lastResult.error}
          </div>
        )}
      </fieldset>
    </form>
  );
};
