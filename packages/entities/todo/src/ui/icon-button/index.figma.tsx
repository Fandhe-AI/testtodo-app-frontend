import figma from "@figma/code-connect";
import type { IconName } from "@repo/shared-ui-icon";
import { TodoIconButton } from "./index";

/**
 * TodoIconButton - Figma Code Connect
 *
 * Figma の TodoIconButton コンポーネントとコードを接続します。
 *
 * URL は figma.config.json の documentUrlSubstitutions で管理しています。
 * 実際の Figma URL に接続するには、figma.config.json を編集してください。
 */
figma.connect(TodoIconButton, "<FIGMA_TODO_ICON_BUTTON>", {
  props: {
    // アイコンプロパティ
    // Figma側でIconインスタンスを配置
    icon: figma.instance("Icon"),

    // バリアントプロパティ - figma.enum()
    variant: figma.enum("Variant", {
      Primary: "primary",
      Secondary: "secondary",
      Danger: "danger",
      Ghost: "ghost",
    }),
    size: figma.enum("Size", {
      Small: "sm",
      Medium: "md",
    }),

    // Booleanプロパティ - figma.enum()
    loading: figma.enum("State", {
      Loading: true,
    }),
    disabled: figma.enum("State", {
      Disabled: true,
    }),

    // aria-label は固定値として設定（Figmaでは通常管理しない）
    "aria-label": figma.string("Label"),
  },
  example: ({ icon, variant, size, loading, disabled }) => (
    <TodoIconButton
      icon={icon as unknown as IconName}
      variant={variant}
      size={size}
      loading={loading}
      disabled={disabled}
      aria-label="ボタン"
    />
  ),
});
