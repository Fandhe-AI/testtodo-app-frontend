import figma from "@figma/code-connect";
import { TodoButton } from "./index";

/**
 * TodoButton - Figma Code Connect
 *
 * Figma の TodoButton コンポーネントとコードを接続します。
 *
 * URL は figma.config.json の documentUrlSubstitutions で管理しています。
 * 実際の Figma URL に接続するには、figma.config.json を編集してください。
 */
figma.connect(TodoButton, "<FIGMA_TODO_BUTTON>", {
  imports: ["import { TodoButton } from '@repo/entities-todo/ui/button'"],
  props: {
    // テキストプロパティ - figma.string()
    children: figma.string("Text"),

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

    // アイコンプロパティ
    // Figma側でBooleanプロパティでアイコンの表示/非表示を制御
    // 表示する場合はIconインスタンスを参照
    startIcon: figma.boolean("Show Start Icon", {
      true: figma.instance("Start Icon"),
      false: undefined,
    }),
    endIcon: figma.boolean("Show End Icon", {
      true: figma.instance("End Icon"),
      false: undefined,
    }),

    // Booleanプロパティ - figma.enum()
    loading: figma.enum("State", {
      Loading: true,
    }),
    disabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({
    children,
    variant,
    size,
    loading,
    disabled,
    startIcon,
    endIcon,
  }) => (
    <TodoButton
      variant={variant}
      size={size}
      loading={loading}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </TodoButton>
  ),
});
