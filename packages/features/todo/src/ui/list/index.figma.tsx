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
 * 注意: 実装では todos: Todo[] を受け取り内部で map してレンダリングしますが、
 * Figma 上では "Todo Items" レイヤー内の TodoCard インスタンスとして配置されます。
 * figma.children() を使用して Figma 上の視覚的なレイアウトを表現しています。
 */
figma.connect(TodoList, "<FIGMA_TODO_LIST>", {
  props: {
    // Figma 上の "Todo Items" レイヤー内に配置された TodoCard インスタンス
    // 実装では todos.map((todo) => <TodoCard {...todo} />) で生成
    todoItems: figma.children("Todo Items"),
  },
  example: ({ todoItems }) => (
    // Figma 上の視覚的なレイアウトを表現
    // 実際の使用: <TodoList todos={[...]} onToggle={...} onDelete={...} />
    <div className="space-y-2">{todoItems}</div>
  ),
});
