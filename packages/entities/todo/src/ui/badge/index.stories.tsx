import type { Meta, StoryObj } from "@storybook/react";
import { TodoBadge } from ".";

const meta: Meta<typeof TodoBadge> = {
  title: "Entities/Todo/TodoBadge",
  component: TodoBadge,
  tags: ["autodocs"],
  argTypes: {
    priority: {
      control: "select",
      options: ["low", "medium", "high"],
      description: "優先度",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TodoBadge>;

export const Low: Story = {
  args: {
    priority: "low",
  },
};

export const Medium: Story = {
  args: {
    priority: "medium",
  },
};

export const High: Story = {
  args: {
    priority: "high",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <TodoBadge priority="low" />
      <TodoBadge priority="medium" />
      <TodoBadge priority="high" />
    </div>
  ),
};
