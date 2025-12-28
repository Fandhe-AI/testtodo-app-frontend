import figma from "@figma/code-connect";
import { TodoFormAdd } from "./index";

/**
 * TodoFormAdd - Figma Code Connect
 *
 * Figma の FormAdd コンポーネントとコードを接続します。
 *
 * URL は figma.config.json の documentUrlSubstitutions で管理しています。
 * 実際の Figma URL に接続するには、figma.config.json を編集してください。
 *
 * 注意: このコンポーネントは Server Actions に依存しています。
 * Figma では視覚的な表現のみを接続し、実際の動作は実装で提供されます。
 */
figma.connect(TodoFormAdd, "<FIGMA_TODO_FORM_ADD>", {
  imports: ["import { TodoFormAdd } from '@repo/features-todo/ui/form/add'"],
  example: () => (
    // 実際の使用: <TodoFormAdd action={createAction} onTodoAdded={handleAdded} />
    <TodoFormAdd
      action={async () => ({ error: "Mock action" })}
      onTodoAdded={() => {}}
    />
  ),
});
