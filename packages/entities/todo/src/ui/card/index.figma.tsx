import figma from "@figma/code-connect";
import { TodoCard } from "./index";

/**
 * TodoCard - Figma Code Connect
 *
 * Figma の TodoCard コンポーネントとコードを接続します。
 *
 * URL は figma.config.json の documentUrlSubstitutions で管理しています。
 * 実際の Figma URL に接続するには、figma.config.json を編集してください。
 */
figma.connect(TodoCard, "<FIGMA_TODO_CARD>", {
  imports: ["import { TodoCard } from '@repo/entities-todo/ui/card'"],
  props: {
    // テキストプロパティ - figma.string()
    title: figma.string("Title"),

    // バリアントプロパティ - figma.enum()
    status: figma.enum("Status", {
      Todo: "todo",
      Completed: "completed",
    }),
    priority: figma.enum("Priority", {
      Low: "low",
      Medium: "medium",
      High: "high",
    }),

    // 状態プロパティ - figma.enum()でStateバリアントをマッピング
    isProcessing: figma.enum("State", {
      Processing: true,
    }),
  },
  example: ({ title, status, priority, isProcessing }) => (
    <TodoCard
      id="todo-id"
      title={title}
      status={status}
      priority={priority}
      isProcessing={isProcessing}
      createdAt={new Date().toISOString()}
      updatedAt={new Date().toISOString()}
      onToggle={(id) => console.log("Toggle:", id)}
      onDelete={(id) => console.log("Delete:", id)}
    />
  ),
});
