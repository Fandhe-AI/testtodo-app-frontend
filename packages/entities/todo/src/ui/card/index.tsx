import { Icon } from "@repo/shared-ui-icon/ui/icon";
import type { Todo } from "../../model";
import { TodoButton } from "../button";
import { TodoPriorityChip } from "../priority-chip";

type Props = Todo & {
  /**
   * 完了状態をトグルするコールバック
   */
  onToggle?: (todoId: Todo["id"]) => void;
  /**
   * 削除するコールバック
   */
  onDelete?: (todoId: Todo["id"]) => void;
  /**
   * 処理中かどうか
   */
  isProcessing?: boolean;
};

/**
 * Todo カードコンポーネント
 *
 * シンプルな Todo アイテムを表示するカードです。
 */
export const TodoCard = ({
  id,
  title,
  status,
  priority,
  onToggle,
  onDelete,
  isProcessing = false,
  // 以下のフィールドは型互換性のために受け取るが表示しない
  dueDate: _dueDate,
  categoryId: _categoryId,
  createdAt: _createdAt,
  updatedAt: _updatedAt,
}: Props) => {
  const isCompleted = status === "completed";

  return (
    <div
      className={[
        "group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4",
        "transition-all duration-150",
        !isProcessing && "hover:border-slate-300 hover:bg-slate-50",
        "dark:border-slate-800 dark:bg-slate-900",
        !isProcessing && "dark:hover:border-slate-700 dark:hover:bg-slate-800",
        isProcessing && "opacity-50",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* チェックボックス */}
      <button
        type="button"
        onClick={() => onToggle?.(id)}
        disabled={isProcessing || !onToggle}
        className={[
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2",
          "transition-all duration-200",
          isCompleted
            ? "border-emerald-500 bg-emerald-500 shadow-sm dark:border-emerald-400 dark:bg-emerald-400"
            : !isProcessing
              ? "border-slate-300 hover:scale-110 hover:border-emerald-400 dark:border-slate-700 dark:hover:border-emerald-500"
              : "border-slate-300 dark:border-slate-700",
          !onToggle ? "cursor-default" : "",
        ].join(" ")}
      >
        {isCompleted && (
          <Icon
            name="check"
            className="h-3.5 w-3.5 text-white"
            strokeWidth={3}
            aria-label="完了済み"
          />
        )}
      </button>

      {/* タイトルと優先度 */}
      <div className="flex flex-1 items-center gap-2">
        <h3
          className={[
            "break-all text-slate-900 text-sm",
            "dark:text-white",
            isCompleted
              ? "text-slate-400 line-through dark:text-slate-500"
              : "",
          ].join(" ")}
        >
          {title}
        </h3>
        <TodoPriorityChip priority={priority} />
      </div>

      {/* 削除ボタン */}
      {onDelete && (
        <TodoButton
          variant="ghost"
          size="md"
          startIcon="trash"
          onClick={() => onDelete(id)}
          disabled={isProcessing}
          className="min-w-0 opacity-0 group-hover:opacity-100"
          aria-label="削除"
        />
      )}
    </div>
  );
};
