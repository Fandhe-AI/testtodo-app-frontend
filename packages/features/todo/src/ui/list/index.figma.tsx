import figma from "@figma/code-connect";
import { TodoList } from "./index";

/**
 * TodoList - Figma Code Connect
 *
 * Figma の TodoList コンポーネントとコードを接続します。
 *
 * URL は figma.config.json の documentUrlSubstitutions で管理しています。
 * 実際の Figma URL に接続するには、figma.config.json を編集してください。
 *
 * figma.children() の使用例:
 * - Figma上で "Todo Items" レイヤー配下に配置されたTodoCardコンポーネントを取得
 * - TodoListは内部でTodoCardをレンダリングするため、childrenとして表示
 */
figma.connect(TodoList, "<FIGMA_TODO_LIST>", {
  props: {
    // 子コンポーネント - figma.children()
    // Figma上の "Todo Items" レイヤー内のインスタンスを取得
    todoItems: figma.children("Todo Items"),
  },
  example: ({ todoItems }) => (
    // TodoListは内部でinitialTodosからTodoCardを生成するが、
    // Figma上ではchildrenとして視覚的に表現される
    <div className="space-y-3">
      {/* figma.children() で取得した子コンポーネントを表示 */}
      {todoItems}
    </div>
  ),
});
