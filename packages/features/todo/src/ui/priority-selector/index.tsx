"use client";

import type { TodoPriority } from "@repo/entities-todo";
import { TodoPriorityChip } from "@repo/entities-todo/ui/priority-chip";

type Props = {
  /**
   * 選択中の優先度
   */
  value: TodoPriority;
  /**
   * 優先度変更時のコールバック
   */
  onChange: (priority: TodoPriority) => void;
  /**
   * 無効化フラグ
   */
  disabled?: boolean;
};

const priorities: TodoPriority[] = ["low", "medium", "high"];

/**
 * Todo優先度セレクターコンポーネント
 *
 * 優先度（低・中・高）を視覚的に選択できるコンポーネントです。
 * TodoPriorityChipを使用して統一されたデザインを実現しています。
 */
export const TodoPrioritySelector = ({
  value,
  onChange,
  disabled = false,
}: Props) => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-medium text-slate-600 text-sm dark:text-slate-300">
        優先度
      </span>
      <div className="flex gap-1.5">
        {priorities.map((priority) => (
          <TodoPriorityChip
            key={priority}
            priority={priority}
            selected={value === priority}
            onClick={() => onChange(priority)}
            showIcon
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};
