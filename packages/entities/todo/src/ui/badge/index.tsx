import type { TodoPriority } from "../../model";

type Props = {
  /**
   * 優先度
   */
  priority: TodoPriority;
};

const colors: Record<TodoPriority, string> = {
  low: "bg-green-500/20 text-green-400",
  medium: "bg-yellow-500/20 text-yellow-400",
  high: "bg-red-500/20 text-red-400",
};

const labels: Record<TodoPriority, string> = {
  low: "低",
  medium: "中",
  high: "高",
};

/**
 * 優先度バッジコンポーネント
 *
 * Todo の優先度を視覚的に表示するバッジです。
 */
export const TodoBadge = ({ priority }: Props) => {
  return (
    <span
      className={`rounded-full px-2 py-0.5 font-medium text-xs ${colors[priority]}`}
    >
      {labels[priority]}
    </span>
  );
};
