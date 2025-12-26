import figma from "@figma/code-connect";
import { TodoPrioritySelector } from "./index";

/**
 * TodoPrioritySelector - Figma Code Connect
 *
 * Figma の PrioritySelector コンポーネントとコードを接続します。
 *
 * URL は figma.config.json の documentUrlSubstitutions で管理しています。
 * 実際の Figma URL に接続するには、figma.config.json を編集してください。
 */
figma.connect(TodoPrioritySelector, "<FIGMA_TODO_PRIORITY_SELECTOR>", {
  props: {
    // バリアントプロパティ - figma.enum()
    value: figma.enum("Priority", {
      Low: "low",
      Medium: "medium",
      High: "high",
    }),

    // Booleanプロパティ - figma.boolean()
    disabled: figma.boolean("Disabled"),
  },
  example: ({ value, disabled }) => (
    <TodoPrioritySelector
      value={value}
      onChange={() => {}}
      disabled={disabled}
    />
  ),
});
