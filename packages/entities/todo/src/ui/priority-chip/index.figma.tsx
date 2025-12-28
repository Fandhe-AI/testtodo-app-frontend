import figma from "@figma/code-connect";
import { TodoPriorityChip } from "./index";

/**
 * TodoPriorityChip (Display Only) - Figma Code Connect
 *
 * 情報表示専用（onClickなし）
 */
figma.connect(TodoPriorityChip, "<FIGMA_TODO_PRIORITY_BADGE>", {
  imports: [
    "import { TodoPriorityChip } from '@repo/entities-todo/ui/priority-chip'",
  ],
  props: {
    priority: figma.enum("Priority", {
      Low: "low",
      Medium: "medium",
      High: "high",
    }),
    showIcon: figma.boolean("Show Icon"),
  },
  example: ({ priority, showIcon }) => (
    <TodoPriorityChip priority={priority} showIcon={showIcon} />
  ),
});

/**
 * TodoPriorityChip (Interactive) - Figma Code Connect
 *
 * 選択可能（onClickあり）
 */
figma.connect(TodoPriorityChip, "<FIGMA_TODO_PRIORITY_CHIP_INTERACTIVE>", {
  imports: [
    "import { TodoPriorityChip } from '@repo/entities-todo/ui/priority-chip'",
  ],
  props: {
    priority: figma.enum("Priority", {
      Low: "low",
      Medium: "medium",
      High: "high",
    }),
    selected: figma.boolean("Selected"),
    disabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ priority, selected, disabled }) => (
    <TodoPriorityChip
      priority={priority}
      selected={selected}
      onClick={() => {}}
      showIcon
      disabled={disabled}
    />
  ),
});
