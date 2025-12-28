import { Icon, type IconName } from "@repo/shared-ui-icon";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

type Variant = "primary" | "secondary" | "danger" | "ghost";
type Size = "sm" | "md";

type Props = ComponentPropsWithoutRef<"button"> & {
  /**
   * ボタンのバリアント
   */
  variant?: Variant;
  /**
   * ボタンのサイズ
   */
  size?: Size;
  /**
   * ローディング状態
   */
  loading?: boolean;
  /**
   * 左側に表示するアイコン名
   */
  startIcon?: IconName;
  /**
   * 右側に表示するアイコン名
   */
  endIcon?: IconName;
};

const variantStyles: Record<Variant, string> = {
  primary: [
    "bg-blue-600 text-white",
    "hover:bg-blue-700",
    "active:bg-blue-800",
    "disabled:hover:bg-blue-600",
    "dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800",
  ].join(" "),
  secondary: [
    "bg-slate-100 text-slate-900",
    "hover:bg-slate-200",
    "active:bg-slate-300",
    "disabled:hover:bg-slate-100",
    "dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:active:bg-slate-600",
  ].join(" "),
  danger: [
    "bg-red-600 text-white",
    "hover:bg-red-700",
    "active:bg-red-800",
    "disabled:hover:bg-red-600",
    "dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800",
  ].join(" "),
  ghost: [
    "bg-transparent text-slate-600",
    "hover:bg-slate-100",
    "active:bg-slate-200",
    "disabled:hover:bg-transparent",
    "dark:text-slate-300 dark:hover:bg-slate-800 dark:active:bg-slate-700",
  ].join(" "),
};

const sizeStyles: Record<Size, { button: string; icon: string }> = {
  sm: {
    button: "px-3 py-1.5 text-xs",
    icon: "h-3 w-3",
  },
  md: {
    button: "px-4 py-2.5 text-sm",
    icon: "h-4 w-4",
  },
};

/**
 * Todo用Buttonコンポーネント
 *
 * Todo機能で使用する汎用ボタンコンポーネントです。
 */
export const TodoButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      startIcon,
      endIcon,
      disabled,
      className,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={[
          "flex items-center justify-center gap-1.5 rounded-lg font-medium",
          "transition-colors duration-150",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size].button,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {loading ? (
          <Icon
            name="loader"
            className={`${sizeStyles[size].icon} animate-spin`}
          />
        ) : (
          startIcon && (
            <Icon name={startIcon} className={sizeStyles[size].icon} />
          )
        )}
        {children}
        {!loading && endIcon && (
          <Icon name={endIcon} className={sizeStyles[size].icon} />
        )}
      </button>
    );
  },
);

TodoButton.displayName = "TodoButton";
