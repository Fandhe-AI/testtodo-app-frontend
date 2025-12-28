import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import "./style.css";

/**
 * 共通のStorybookプレビュー設定
 *
 * @example
 * // .storybook/preview.ts
 * export { default } from "@repo/shared-config-storybook/preview";
 */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Themes addonと重複するため無効化
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "bg-white",
        dark: "dark bg-[#333]",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
