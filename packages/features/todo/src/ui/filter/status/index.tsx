import { TodoStatus } from "@repo/entities-todo";

type Props = {
  /**
   * 現在のステータス
   */
  currentStatus?: TodoStatus | "all";
  /**
   * ステータス変更時のコールバック
   */
  onStatusChange: (status: TodoStatus | "all") => void;
};

const statuses = [
  { value: "all", label: "すべて" },
  { value: TodoStatus.pending, label: "未完了" },
  { value: TodoStatus.completed, label: "完了" },
] as const;

/**
 * ステータスフィルターコンポーネント
 *
 * Todo のステータスでフィルタリングするためのボタングループです。
 */
export const TodoFilterStatus = ({
  currentStatus = "all",
  onStatusChange,
}: Props) => {
  return (
    <div className="flex gap-2">
      {statuses.map((status) => (
        <button
          key={status.value}
          type="button"
          onClick={() => onStatusChange(status.value)}
          className={[
            "rounded-lg px-3 py-1.5 font-medium text-sm transition-colors duration-200",
            currentStatus === status.value
              ? "bg-white/20 text-white"
              : "text-white/60 hover:bg-white/10 hover:text-white",
          ].join(" ")}
        >
          {status.label}
        </button>
      ))}
    </div>
  );
};
