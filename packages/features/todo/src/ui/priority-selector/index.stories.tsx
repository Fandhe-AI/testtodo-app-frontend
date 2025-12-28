import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TodoPrioritySelector } from "./index";

const meta = {
  title: "Features/Todo/PrioritySelector",
  component: TodoPrioritySelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "radio",
      options: ["low", "medium", "high"],
      description: "選択中の優先度",
    },
    disabled: {
      control: "boolean",
      description: "無効化フラグ",
    },
  },
} satisfies Meta<typeof TodoPrioritySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト状態（中優先度）
 */
export const Default: Story = {
  args: {
    value: "medium",
    onChange: () => {},
  },
  render: () => {
    const [priority, setPriority] = useState<"low" | "medium" | "high">(
      "medium",
    );
    return <TodoPrioritySelector value={priority} onChange={setPriority} />;
  },
};

/**
 * 低優先度選択状態
 */
export const LowPriority: Story = {
  args: {
    value: "low",
    onChange: () => {},
  },
  render: () => {
    const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
    return <TodoPrioritySelector value={priority} onChange={setPriority} />;
  },
};

/**
 * 中優先度選択状態
 */
export const MediumPriority: Story = {
  args: {
    value: "medium",
    onChange: () => {},
  },
  render: () => {
    const [priority, setPriority] = useState<"low" | "medium" | "high">(
      "medium",
    );
    return <TodoPrioritySelector value={priority} onChange={setPriority} />;
  },
};

/**
 * 高優先度選択状態
 */
export const HighPriority: Story = {
  args: {
    value: "high",
    onChange: () => {},
  },
  render: () => {
    const [priority, setPriority] = useState<"low" | "medium" | "high">("high");
    return <TodoPrioritySelector value={priority} onChange={setPriority} />;
  },
};

/**
 * 無効化状態
 */
export const Disabled: Story = {
  args: {
    value: "medium",
    onChange: () => {},
    disabled: true,
  },
  render: () => {
    const [priority, setPriority] = useState<"low" | "medium" | "high">(
      "medium",
    );
    return (
      <TodoPrioritySelector
        value={priority}
        onChange={setPriority}
        disabled={true}
      />
    );
  },
};
