import type { TodosPageSearchParams } from "@repo/pages-todos";
import { TodosPage } from "@repo/pages-todos/ui";
import { createTodo, deleteTodo, getTodos, toggleTodo } from "./actions";

type Props = {
  searchParams: Promise<TodosPageSearchParams>;
};

/**
 * Todos ページ
 *
 * Todo リストを表示し、追加・編集・削除・完了状態の切り替えを行います。
 */
export default async (props: Props) => {
  const params = await props.searchParams;

  // 初期データを取得
  const initialData = await getTodos({
    status: params.status as "pending" | "completed" | "all" | undefined,
    category: params.category,
    priority: params.priority as "low" | "medium" | "high" | undefined,
    search: params.search,
    page: params.page ? Number.parseInt(params.page, 10) : undefined,
  });

  return (
    <TodosPage
      searchParams={props.searchParams}
      onAdd={createTodo}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
      initialData={{
        todos: initialData.data,
        pagination: initialData.pagination,
      }}
    />
  );
};
