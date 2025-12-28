import type { Todo } from "@repo/entities-todo";
import type { Meta, StoryObj } from "@storybook/react";
import { TodoFormAdd } from "./index";

// Storybook用のモックアクション
const mockAction = async () => {
  // フォーム送信をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newTodo: Todo = {
    id: Math.random().toString(36).substr(2, 9),
    title: "新しいタスク",
    status: "todo",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return { success: true, value: newTodo };
};

const mockSuccessAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const newTodo: Todo = {
    id: Math.random().toString(36).substr(2, 9),
    title: "新しいタスク",
    status: "todo",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return { success: true, value: newTodo };
};

const mockErrorAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { error: "タスクの追加に失敗しました" };
};

const meta: Meta<typeof TodoFormAdd> = {
  title: "Features/Todo/FormAdd",
  component: TodoFormAdd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト状態
 */
export const Default: Story = {
  args: {
    action: mockAction,
  },
};

/**
 * 成功時の動作
 */
export const Success: Story = {
  args: {
    action: mockSuccessAction,
    onTodoAdded: (todo) => {
      console.log("Todo added:", todo);
    },
  },
};

/**
 * エラー時の動作
 */
export const WithError: Story = {
  args: {
    action: mockErrorAction,
  },
};
