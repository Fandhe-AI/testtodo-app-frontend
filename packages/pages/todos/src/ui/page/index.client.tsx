"use client";

import { type Todo, TodoStatus } from "@repo/entities-todo";
import type {
  createCreate,
  createDelete,
  createToggle,
} from "@repo/features-todo";
import { TodoFilterStatus } from "@repo/features-todo/ui/filter/status";
import { TodoFormAdd } from "@repo/features-todo/ui/form/add";
import { TodoList } from "@repo/features-todo/ui/list";
import type { Pagination } from "@repo/shared-api-type/todo";
import { use } from "react";
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
   * @default "Todo リスト"
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
  searchParams,
  onAdd,
  onToggle,
  onDelete,
  title = "Todo リスト",
  initialData,
}: Props) => {
  const params = use(searchParams);

  let status: TodoStatus | "all" = "all";
  if (params.status) {
    if (Object.values(TodoStatus).includes(params.status as TodoStatus)) {
      status = params.status as TodoStatus;
    }
  }

  // フィルター変更
  const handleStatusChange = (status: string) => {
    const url = new URL(window.location.href);
    if (status === "all") {
      url.searchParams.delete("status");
    } else {
      url.searchParams.set("status", status);
    }
    window.history.pushState({}, "", url.toString());
    // リロードしてサーバーから新しいデータを取得
    window.location.href = url.toString();
  };

  return (
    <div
      className={[
        "flex min-h-screen flex-col",
        "bg-linear-to-br from-[#1a1a2e] to-[#16213e]",
      ].join(" ")}
    >
      {/* ヘッダー */}
      <header className="border-white/10 border-b p-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-semibold text-2xl text-white tracking-wide">
            {title}
          </h1>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* フィルター */}
          <div className="flex items-center justify-between">
            <TodoFilterStatus
              currentStatus={status}
              onStatusChange={handleStatusChange}
            />
            <p className="text-sm text-white/40">
              {initialData.pagination.total} 件
            </p>
          </div>

          {/* Todo 追加フォーム */}
          <TodoFormAdd action={onAdd} />

          {/* Todo リスト */}
          <TodoList
            initialTodos={initialData.todos}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        </div>
      </main>
    </div>
  );
};
