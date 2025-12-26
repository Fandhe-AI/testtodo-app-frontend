"use client";

import type { IconName } from "@repo/shared-ui-icon";
import { Icon } from "@repo/shared-ui-icon";
import type { TodoPriority } from "../../model";

type Props = {
  /**
   * 優先度
   */
  priority: TodoPriority;
  /**
   * アイコンを表示するか
   * @default false
   */
  showIcon?: boolean;
  /**
   * 選択状態（onClickが指定されている場合のみ有効）
   * @default false
   */
  selected?: boolean;
  /**
   * クリック時のコールバック
   * 指定された場合、インタラクティブなボタンとしてレンダリングされます
   */
  onClick?: () => void;
  /**
   * 無効化フラグ
   * @default false
   */
  disabled?: boolean;
};

// 優先度のメタデータ（ラベルとアイコン）
const PRIORITY_LABELS: Record<TodoPriority, string> = {
  low: "低",
  medium: "中",
  high: "高",
};

const PRIORITY_ICONS: Record<TodoPriority, IconName> = {
  low: "arrow-down",
  medium: "minus",
  high: "arrow-up",
};

/**
 * 優先度に応じたTailwindクラス名を取得
 * Tailwind v4のビルド時検出のため、完全なクラス名を条件分岐で返す
 * WCAG 2.1 AA基準（4.5:1以上のコントラスト比）を満たすように設計
 */
const getPriorityStyles = (
  priority: TodoPriority,
  selected: boolean,
): string => {
  if (selected) {
    // 選択時は背景を濃くしてコントラストを確保
    switch (priority) {
      case "low":
        return "bg-green-200 text-green-900 dark:bg-green-500/30 dark:text-green-100";
      case "medium":
        return "bg-yellow-200 text-yellow-950 dark:bg-yellow-500/30 dark:text-yellow-100";
      case "high":
        return "bg-red-200 text-red-900 dark:bg-red-500/30 dark:text-red-100";
    }
  }

  // 非選択時は適度な背景色で視認性を確保
  switch (priority) {
    case "low":
      return "bg-green-100 text-green-900 dark:bg-green-500/20 dark:text-green-200";
    case "medium":
      return "bg-yellow-100 text-yellow-950 dark:bg-yellow-500/20 dark:text-yellow-200";
    case "high":
      return "bg-red-100 text-red-900 dark:bg-red-500/20 dark:text-red-200";
  }
};

/**
 * 優先度に応じたリングカラーを取得
 */
const getPriorityRingColor = (priority: TodoPriority): string => {
  switch (priority) {
    case "low":
      return "ring-green-400";
    case "medium":
      return "ring-yellow-400";
    case "high":
      return "ring-red-400";
  }
};

/**
 * 優先度チップコンポーネント
 *
 * Todo の優先度を視覚的に表示・選択するための統一デザインコンポーネントです。
 * onClickハンドラの有無により、自動的に表示専用またはインタラクティブモードとして動作します。
 *
 * @example
 * ```tsx
 * // 表示専用（spanとしてレンダリング）
 * <TodoPriorityChip priority="high" />
 *
 * // インタラクティブ（buttonとしてレンダリング）
 * <TodoPriorityChip
 *   priority="medium"
 *   selected={true}
 *   onClick={() => onChange("medium")}
 *   showIcon
 * />
 * ```
 */
export const TodoPriorityChip = ({
  priority,
  showIcon = false,
  selected = false,
  onClick,
  disabled = false,
}: Props) => {
  // 統一された基本スタイル
  const baseClasses = [
    "inline-flex items-center gap-1.5",
    "rounded-md px-2.5 py-1",
    "font-medium text-xs",
    "transition-all duration-150",
    getPriorityStyles(priority, selected),
  ];

  // onClickがある場合のみインタラクティブ機能を追加
  const interactionClasses =
    onClick && !disabled
      ? [
          "cursor-pointer",
          "hover:shadow-sm",
          "hover:scale-[1.02]",
          "active:scale-[0.98]",
        ]
      : [];

  // 選択状態のスタイル
  const selectionClasses = selected
    ? [
        "shadow-md ring-2 ring-offset-2 dark:ring-offset-slate-900",
        getPriorityRingColor(priority),
      ]
    : [];

  // 無効化状態のスタイル
  const disabledClasses = disabled ? ["cursor-not-allowed opacity-50"] : [];

  const className = [
    ...baseClasses,
    ...interactionClasses,
    ...selectionClasses,
    ...disabledClasses,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {showIcon && (
        <Icon
          name={PRIORITY_ICONS[priority]}
          className="h-3.5 w-3.5"
          aria-label={`${PRIORITY_LABELS[priority]}優先度`}
        />
      )}
      <span>{PRIORITY_LABELS[priority]}</span>
    </>
  );

  // onClickの有無で要素タイプを自動判定
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-pressed={selected}
        className={className}
      >
        {content}
      </button>
    );
  }

  return <span className={className}>{content}</span>;
};
