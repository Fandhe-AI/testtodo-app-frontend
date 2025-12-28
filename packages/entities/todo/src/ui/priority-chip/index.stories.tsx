import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TodoPriorityChip } from "./index";

const meta = {
  title: "Entities/Todo/PriorityChip",
  component: TodoPriorityChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    priority: {
      control: "radio",
      options: ["low", "medium", "high"],
      description: "優先度",
    },
    showIcon: {
      control: "boolean",
      description: "アイコン表示",
    },
    selected: {
      control: "boolean",
      description: "選択状態（onClick指定時のみ有効）",
    },
    disabled: {
      control: "boolean",
      description: "無効化フラグ",
    },
  },
} satisfies Meta<typeof TodoPriorityChip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト - 情報表示専用
 */
export const Default: Story = {
  args: {
    priority: "medium",
  },
};

/**
 * すべての優先度 - 表示専用
 */
export const AllPriorities: Story = {
  args: {
    priority: "medium",
  },
  render: () => (
    <div className="flex gap-2">
      <TodoPriorityChip priority="low" />
      <TodoPriorityChip priority="medium" />
      <TodoPriorityChip priority="high" />
    </div>
  ),
};

/**
 * アイコン付き - 表示専用
 */
export const WithIcon: Story = {
  args: {
    priority: "medium",
  },
  render: () => (
    <div className="flex gap-2">
      <TodoPriorityChip priority="low" showIcon />
      <TodoPriorityChip priority="medium" showIcon />
      <TodoPriorityChip priority="high" showIcon />
    </div>
  ),
};

/**
 * 選択可能 - インタラクティブ
 */
export const Selectable: Story = {
  args: {
    priority: "medium",
  },
  render: () => {
    const [selected, setSelected] = useState<"low" | "medium" | "high">(
      "medium",
    );
    return (
      <div className="flex gap-1.5">
        <TodoPriorityChip
          priority="low"
          selected={selected === "low"}
          onClick={() => setSelected("low")}
          showIcon
        />
        <TodoPriorityChip
          priority="medium"
          selected={selected === "medium"}
          onClick={() => setSelected("medium")}
          showIcon
        />
        <TodoPriorityChip
          priority="high"
          selected={selected === "high"}
          onClick={() => setSelected("high")}
          showIcon
        />
      </div>
    );
  },
};

/**
 * 無効化状態 - インタラクティブ
 */
export const Disabled: Story = {
  args: {
    priority: "high",
    selected: true,
    showIcon: true,
    disabled: true,
  },
  render: (args) => (
    <TodoPriorityChip {...args} onClick={() => console.log("clicked")} />
  ),
};
