import type { Meta, StoryObj } from "@storybook/react";
import { TodoButton } from ".";

const meta: Meta<typeof TodoButton> = {
  title: "Entities/Todo/TodoButton",
  component: TodoButton,
  tags: ["autodocs"],
  argTypes: {
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
    startIcon: {
      control: "select",
      options: [undefined, "plus", "minus", "arrow-up", "arrow-down", "loader"],
      description: "左側のアイコン名",
    },
    endIcon: {
      control: "select",
      options: [undefined, "plus", "minus", "arrow-up", "arrow-down", "loader"],
      description: "右側のアイコン名",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TodoButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const WithIconStart: Story = {
  args: {
    startIcon: "plus",
    children: "追加",
  },
};

export const WithIconEnd: Story = {
  args: {
    endIcon: "arrow-up",
    children: "送信",
  },
};

export const WithBothIcons: Story = {
  args: {
    startIcon: "plus",
    endIcon: "arrow-up",
    children: "Submit",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "送信中",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <TodoButton variant="primary">Primary</TodoButton>
        <TodoButton variant="secondary">Secondary</TodoButton>
        <TodoButton variant="danger">Danger</TodoButton>
        <TodoButton variant="ghost">Ghost</TodoButton>
      </div>
      <div className="flex gap-2">
        <TodoButton size="sm">Small</TodoButton>
        <TodoButton size="md">Medium</TodoButton>
      </div>
      <div className="flex gap-2">
        <TodoButton startIcon="plus">With Icon Start</TodoButton>
        <TodoButton endIcon="arrow-up">With Icon End</TodoButton>
        <TodoButton startIcon="plus" endIcon="arrow-down">
          Both Icons
        </TodoButton>
      </div>
      <div className="flex gap-2">
        <TodoButton loading>Loading</TodoButton>
        <TodoButton disabled>Disabled</TodoButton>
      </div>
    </div>
  ),
};
