import type { Todo } from "@repo/entities-todo";
import { TodoCard } from "@repo/entities-todo/ui/card";
import type { Meta, StoryObj } from "@storybook/react";

// TodoListはServer Actionsに依存しているため、
// Storybook用にTodoCardのリストを直接表示するラッパーを使用
const TodoListPreview = ({
  todos,
  onToggle,
  onDelete,
}: {
  todos: Todo[];
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
}) => {
  if (todos.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-[10px]">
        <p className="text-white/60">Todo がありません</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoCard
          {...todo}
          key={todo.id}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

const meta: Meta<typeof TodoListPreview> = {
  title: "Features/Todo/TodoList",
  component: TodoListPreview,
  tags: ["autodocs"],
  args: {
    onToggle: () => {},
    onDelete: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof TodoListPreview>;

const sampleTodos: Todo[] = [
  {
    id: "1",
    title: "プロジェクトの企画書を作成",
    description: "来週のミーティングに向けて企画書を準備する",
    status: "pending",
    priority: "high",
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "コードレビューを完了",
    description: "PRのレビューを行う",
    status: "pending",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "ドキュメントを更新",
    status: "completed",
    priority: "low",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const Default: Story = {
  args: {
    todos: sampleTodos,
  },
};

export const Empty: Story = {
  args: {
    todos: [],
  },
};

export const SingleItem: Story = {
  args: {
    todos: [sampleTodos[0] as Todo],
  },
};

export const AllCompleted: Story = {
  args: {
    todos: sampleTodos.map((todo) => ({
      ...todo,
      status: "completed" as const,
    })),
  },
};

export const ReadOnly: Story = {
  args: {
    todos: sampleTodos,
    onToggle: undefined,
    onDelete: undefined,
  },
};
