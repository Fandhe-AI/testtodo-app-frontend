import type { Meta, StoryObj } from "@storybook/react";
import { TodoCard } from ".";

const meta: Meta<typeof TodoCard> = {
  title: "Entities/Todo/TodoCard",
  component: TodoCard,
  tags: ["autodocs"],
  args: {
    id: "1",
    title: "タスクのタイトル",
    description: "タスクの詳細説明です。",
    status: "pending",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    onToggle: () => {},
    onDelete: () => {},
  },
  argTypes: {
    status: {
      control: "select",
      options: ["pending", "completed"],
      description: "タスクのステータス",
    },
    priority: {
      control: "select",
      options: ["low", "medium", "high"],
      description: "優先度",
    },
    isPending: {
      control: "boolean",
      description: "操作中かどうか",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TodoCard>;

export const Default: Story = {};

export const Completed: Story = {
  args: {
    status: "completed",
  },
};

export const HighPriority: Story = {
  args: {
    priority: "high",
    title: "緊急タスク",
    description: "これは緊急のタスクです。すぐに対応が必要です。",
  },
};

export const LowPriority: Story = {
  args: {
    priority: "low",
    title: "低優先度タスク",
    description: "時間があるときに対応すれば大丈夫です。",
  },
};

export const WithDueDate: Story = {
  args: {
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    title: "期限付きタスク",
  },
};

export const Pending: Story = {
  args: {
    isPending: true,
    title: "処理中のタスク",
  },
};

export const WithoutDescription: Story = {
  args: {
    description: undefined,
    title: "説明なしタスク",
  },
};

export const ReadOnly: Story = {
  args: {
    onToggle: undefined,
    onDelete: undefined,
    title: "読み取り専用タスク",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-3">
      <TodoCard
        id="1"
        title="未完了・高優先度"
        description="緊急対応が必要"
        status="pending"
        priority="high"
        createdAt={new Date().toISOString()}
        updatedAt={new Date().toISOString()}
      />
      <TodoCard
        id="2"
        title="未完了・中優先度"
        description="通常のタスク"
        status="pending"
        priority="medium"
        createdAt={new Date().toISOString()}
        updatedAt={new Date().toISOString()}
      />
      <TodoCard
        id="3"
        title="未完了・低優先度"
        description="時間があるときに"
        status="pending"
        priority="low"
        createdAt={new Date().toISOString()}
        updatedAt={new Date().toISOString()}
      />
      <TodoCard
        id="4"
        title="完了済み"
        description="このタスクは完了しました"
        status="completed"
        priority="medium"
        createdAt={new Date().toISOString()}
        updatedAt={new Date().toISOString()}
      />
    </div>
  ),
};
