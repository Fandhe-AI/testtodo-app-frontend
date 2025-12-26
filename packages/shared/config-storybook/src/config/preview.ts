import type { Preview } from "@storybook/react";
import "./style.css";

/**
 * 共通のStorybookプレビュー設定
 *
 * @example
 * // .storybook/preview.ts
 * export { preview as default } from "@repo/shared-config-storybook/preview";
 */
export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};
