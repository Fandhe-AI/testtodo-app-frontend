import type { LucideProps } from "lucide-react";
import {
  ArrowDown,
  ArrowUp,
  Check,
  Loader2,
  Minus,
  Pencil,
  Plus,
  Trash2,
  X,
} from "lucide-react";

/**
 * アイコン名とLucideコンポーネントのマッピング
 */
const iconMap = {
  plus: Plus,
  minus: Minus,
  "arrow-up": ArrowUp,
  "arrow-down": ArrowDown,
  loader: Loader2,
  trash: Trash2,
  edit: Pencil,
  check: Check,
  x: X,
} as const;

/**
 * 利用可能なアイコン名の型
 */
export type IconName = keyof typeof iconMap;

/**
 * Iconコンポーネントのprops
 */
type Props = Omit<LucideProps, "ref"> & {
  /**
   * アイコン名
   */
  name: IconName;
};

/**
 * アイコンコンポーネント
 *
 * Lucideアイコンライブラリをラップしたコンポーネントです。
 *
 * @example
 * ```tsx
 * <Icon name="plus" className="h-4 w-4" />
 * <Icon name="arrow-up" className="h-3.5 w-3.5" />
 * ```
 */
export const Icon = ({ name, ...props }: Props) => {
  const LucideIcon = iconMap[name];
  return <LucideIcon {...props} />;
};
