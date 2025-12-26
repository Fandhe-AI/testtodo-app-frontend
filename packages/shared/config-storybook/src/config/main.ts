import type { StorybookConfig } from "@storybook/react-vite";
import { getAbsolutePath } from "./utils/get-absolute-path.ts";

/**
 * 共通のStorybookメイン設定を作成
 *
 * @example
 * // .storybook/main.ts
 * import { createMainConfig } from "@repo/shared-config-storybook/main";
 * export default createMainConfig();
 */
export const createMainConfig = (
  options: Partial<StorybookConfig> = {},
): StorybookConfig => {
  return {
    stories: ["../src/**/*.stories.@(ts|tsx)"],
    addons: [
      getAbsolutePath("@storybook/addon-a11y"),
      getAbsolutePath("@storybook/addon-themes"),
    ],
    framework: {
      name: getAbsolutePath("@storybook/react-vite"),
      options: {},
    },
    viteFinal: async (config) => {
      return {
        ...config,
        css: {
          postcss: {
            plugins: [(await import("@tailwindcss/postcss")).default],
          },
        },
      };
    },
    ...options,
  };
};
