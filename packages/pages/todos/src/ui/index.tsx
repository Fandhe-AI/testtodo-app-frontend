import { Suspense } from "react";
import type { TodosPageProps } from "../model";
import { Fallback } from "./fallback";
import { ClientPage } from "./page/index.client";

/**
 * Todos ページコンポーネント
 *
 * FSD に従って設計された Todos ページです。
 * Server Actions を受け取り、Todo の CRUD 操作を行います。
 *
 * @example
 * ```tsx
 * import { TodosPage } from "@repo/pages-todos/ui";
 * import { createCreate, createToggle, createDelete } from "@repo/features-todo";
 *
 * export default async () => {
 *   const initialData = await getTodos();
 *   return (
 *     <TodosPage
 *       searchParams={searchParams}
 *       onAdd={createCreate}
 *       onToggle={createToggle}
 *       onDelete={createDelete}
 *       initialData={initialData}
 *     />
 *   );
 * };
 * ```
 */
export const TodosPage = (props: TodosPageProps) => {
  return (
    <Suspense fallback={<Fallback />}>
      <ClientPage {...props} />
    </Suspense>
  );
};
