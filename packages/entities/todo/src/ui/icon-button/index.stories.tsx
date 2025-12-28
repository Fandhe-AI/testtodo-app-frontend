import type { Meta, StoryObj } from "@storybook/react";
import { TodoIconButton } from ".";

const meta: Meta<typeof TodoIconButton> = {
  title: "Entities/Todo/TodoIconButton",
  component: TodoIconButton,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: [
        "plus",
        "minus",
        "trash",
        "edit",
        "check",
        "x",
        "arrow-up",
        "arrow-down",
        "loader",
      ],
      description: "表示するアイコン名",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost"],
      description: "ボタンのバリアント",
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "ボタンのサイズ",
    },
    loading: {
      control: "boolean",
      description: "ローディング状態",
    },
    disabled: {
      control: "boolean",
      description: "無効化状態",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TodoIconButton>;

export const Primary: Story = {
  args: {
    icon: "plus",
    variant: "primary",
    "aria-label": "追加",
  },
};

export const Secondary: Story = {
  args: {
    icon: "edit",
    variant: "secondary",
    "aria-label": "編集",
  },
};

export const Danger: Story = {
  args: {
    icon: "trash",
    variant: "danger",
    "aria-label": "削除",
  },
};

export const Ghost: Story = {
  args: {
    icon: "x",
    variant: "ghost",
    "aria-label": "閉じる",
  },
};

export const Small: Story = {
  args: {
    icon: "plus",
    size: "sm",
    "aria-label": "追加",
  },
};

export const Medium: Story = {
  args: {
    icon: "plus",
    size: "md",
    "aria-label": "追加",
  },
};

export const Loading: Story = {
  args: {
    icon: "check",
    loading: true,
    "aria-label": "処理中",
  },
};

export const Disabled: Story = {
  args: {
    icon: "trash",
    variant: "danger",
    disabled: true,
    "aria-label": "削除",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <TodoIconButton icon="plus" variant="primary" aria-label="追加" />
        <TodoIconButton icon="edit" variant="secondary" aria-label="編集" />
        <TodoIconButton icon="trash" variant="danger" aria-label="削除" />
        <TodoIconButton icon="x" variant="ghost" aria-label="閉じる" />
      </div>
      <div className="flex items-center gap-2">
        <TodoIconButton icon="plus" size="sm" aria-label="追加（小）" />
        <TodoIconButton icon="plus" size="md" aria-label="追加（中）" />
      </div>
      <div className="flex items-center gap-2">
        <TodoIconButton icon="check" loading aria-label="処理中" />
        <TodoIconButton
          icon="trash"
          variant="danger"
          disabled
          aria-label="削除（無効）"
        />
      </div>
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <TodoIconButton icon="plus" aria-label="追加" />
        <TodoIconButton icon="minus" aria-label="削減" />
        <TodoIconButton icon="trash" variant="danger" aria-label="削除" />
        <TodoIconButton icon="edit" variant="secondary" aria-label="編集" />
        <TodoIconButton icon="check" aria-label="チェック" />
        <TodoIconButton icon="x" variant="ghost" aria-label="閉じる" />
        <TodoIconButton icon="arrow-up" aria-label="上へ" />
        <TodoIconButton icon="arrow-down" aria-label="下へ" />
      </div>
    </div>
  ),
};
