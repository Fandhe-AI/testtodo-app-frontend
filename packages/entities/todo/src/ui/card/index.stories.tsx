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
    status: "todo",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    onToggle: () => {},
    onDelete: () => {},
  },
  argTypes: {
    status: {
      control: "select",
      options: ["todo", "completed"],
      description: "タスクのステータス",
    },
    priority: {
      control: "select",
      options: ["low", "medium", "high"],
      description: "優先度",
    },
    isProcessing: {
      control: "boolean",
      description: "処理中かどうか",
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

export const Processing: Story = {
  args: {
    isProcessing: true,
    title: "処理中のタスク",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-3">
      <TodoCard
        id="1"
        title="高優先度タスク"
        description="緊急対応が必要"
        status="todo"
        priority="high"
        createdAt={new Date().toISOString()}
        updatedAt={new Date().toISOString()}
        onToggle={() => {}}
        onDelete={() => {}}
      />
      <TodoCard
        id="2"
        title="中優先度タスク"
        description="通常のタスク"
        status="todo"
        priority="medium"
        createdAt={new Date().toISOString()}
        updatedAt={new Date().toISOString()}
        onToggle={() => {}}
        onDelete={() => {}}
      />
      <TodoCard
        id="3"
        title="低優先度タスク"
        description="時間があるときに"
        status="todo"
        priority="low"
        createdAt={new Date().toISOString()}
        updatedAt={new Date().toISOString()}
        onToggle={() => {}}
        onDelete={() => {}}
      />
      <TodoCard
        id="4"
        title="完了済みタスク"
        description="このタスクは完了しました"
        status="completed"
        priority="medium"
        createdAt={new Date().toISOString()}
        updatedAt={new Date().toISOString()}
        onToggle={() => {}}
        onDelete={() => {}}
      />
      <TodoCard
        id="5"
        title="処理中のタスク"
        description="現在処理中です"
        status="todo"
        priority="medium"
        isProcessing={true}
        createdAt={new Date().toISOString()}
        updatedAt={new Date().toISOString()}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    </div>
  ),
};
