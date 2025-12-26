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
  props: {
    // テキストプロパティ - figma.string()
    title: figma.string("Title"),
    description: figma.string("Description"),

    // バリアントプロパティ - figma.enum()
    status: figma.enum("Status", {
      Pending: "pending",
      Completed: "completed",
    }),
    priority: figma.enum("Priority", {
      Low: "low",
      Medium: "medium",
      High: "high",
    }),

    // Booleanプロパティ - figma.boolean()
    isPending: figma.boolean("Is Pending"),

    // ネストされたコンポーネント - figma.instance()
    // TodoCard内部でTodoBadgeを使用しているため、instance-swapの例として記載
    // 実際のFigmaではinstance-swapプロパティとして設定
    badge: figma.instance("Badge"),
  },
  example: ({ title, description, status, priority, isPending }) => (
    // badgeはTodoCard内部でpriorityから自動生成されるため、propsとしては渡さない
    // Figma上ではinstance-swapでBadgeコンポーネントを差し替え可能
    <TodoCard
      id="todo-id"
      title={title}
      description={description}
      status={status}
      priority={priority}
      isPending={isPending}
      createdAt={new Date().toISOString()}
      updatedAt={new Date().toISOString()}
      onToggle={(id) => console.log("Toggle:", id)}
      onDelete={(id) => console.log("Delete:", id)}
    />
  ),
});
