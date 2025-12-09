import type { Todo } from "../../model";
import { TodoBadge } from "../badge";

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
   * 操作中かどうか
   */
  isPending?: boolean;
};

/**
 * Todo カードコンポーネント
 *
 * 単一の Todo アイテムを表示するカードです。
 * トグルと削除のアクションをサポートします。
 */
export const TodoCard = ({
  id,
  title,
  description,
  status,
  priority,
  dueDate,
  onToggle,
  onDelete,
  isPending = false,
}: Props) => {
  const isCompleted = status === "completed";

  return (
    <div
      className={[
        "group rounded-xl border border-white/10 bg-white/5 p-4",
        "backdrop-blur-[10px] transition-all duration-200",
        "hover:border-white/20 hover:bg-white/10",
        isPending ? "opacity-50" : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        {/* チェックボックス */}
        <button
          type="button"
          onClick={() => onToggle?.(id)}
          disabled={isPending || !onToggle}
          className={[
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border",
            "transition-colors duration-200",
            isCompleted
              ? "border-green-500 bg-green-500"
              : "border-white/30 hover:border-white/50",
            !onToggle ? "cursor-default" : "",
          ].join(" ")}
        >
          {isCompleted && (
            <svg
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              role="img"
              aria-label="完了済み"
            >
              <title>完了済み</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        {/* コンテンツ */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3
              className={[
                "font-medium text-white",
                isCompleted ? "line-through opacity-50" : "",
              ].join(" ")}
            >
              {title}
            </h3>
            <TodoBadge priority={priority} />
          </div>
          {description && (
            <p
              className={[
                "mt-1 text-sm text-white/60",
                isCompleted ? "line-through opacity-50" : "",
              ].join(" ")}
            >
              {description}
            </p>
          )}
          {dueDate && (
            <p className="mt-2 text-white/40 text-xs">
              期限: {new Date(dueDate).toLocaleDateString("ja-JP")}
            </p>
          )}
        </div>

        {/* 削除ボタン */}
        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(id)}
            disabled={isPending}
            className={[
              "rounded p-1 text-white/40 opacity-0 transition-all duration-200",
              "hover:bg-red-500/20 hover:text-red-400",
              "group-hover:opacity-100",
            ].join(" ")}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              role="img"
              aria-label="削除"
            >
              <title>削除</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
