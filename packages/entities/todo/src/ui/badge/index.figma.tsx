import figma from "@figma/code-connect";
import { TodoBadge } from "./index";

/**
 * TodoBadge - Figma Code Connect
 *
 * Figma の Priority コンポーネントとコードを接続します。
 *
 * URL は figma.config.json の documentUrlSubstitutions で管理しています。
 * 実際の Figma URL に接続するには、figma.config.json を編集してください。
 */
figma.connect(TodoBadge, "<FIGMA_TODO_BADGE>", {
  props: {
    // Figma のバリアントプロパティ "Priority" をコードの priority prop にマッピング
    priority: figma.enum("Priority", {
      Low: "low",
      Medium: "medium",
      High: "high",
    }),
  },
  example: ({ priority }) => <TodoBadge priority={priority} />,
});
