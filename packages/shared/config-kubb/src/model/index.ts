import type { UserConfig } from "@kubb/core";
import { pluginClient } from "@kubb/plugin-client";
import { pluginFaker } from "@kubb/plugin-faker";
import { pluginMsw } from "@kubb/plugin-msw";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";

export const generateConfig = (
  serviceName: string,
  mockBaseURL: string,
): UserConfig => ({
  root: ".",
  input: {
    path: `./node_modules/@repo/shared-api-spec/src/config/${serviceName}.yaml`,
  },
  output: {
    path: "./src",
    extension: {
      ".ts": "",
    },
    barrelType: false,
    defaultBanner: false,
  },
  plugins: [
    pluginOas({
      output: {
        path: `../../api-schema/src/model/${serviceName}`,
      },
    }),
    pluginTs({
      output: {
        path: `../../api-type/src/model/${serviceName}`,
      },
      group: { type: "tag" },
      enumType: "asPascalConst",
      enumSuffix: " ",
      unknownType: "unknown",
      emptySchemaType: "unknown",
      optionalType: "questionTokenAndUndefined",
    }),
    pluginZod({
      output: {
        path: `../../api-zod/src/model/${serviceName}`,
      },
      group: { type: "tag" },
      unknownType: "unknown",
      emptySchemaType: "unknown",
      version: "4",
    }),
    pluginClient({
      output: {
        path: `../../api-client/src/model/${serviceName}`,
      },
      group: { type: "tag" },
      importPath: "@repo/shared-config-kubb",
      operations: true,
      parser: "zod",
      client: "fetch",
    }),
    pluginFaker({
      output: {
        path: `../../api-mock/src/model/${serviceName}`,
      },
      group: { type: "tag" },
      unknownType: "unknown",
      emptySchemaType: "unknown",
    }),
    pluginMsw({
      output: {
        path: `../../api-handler/src/model/${serviceName}`,
      },
      handlers: true,
      baseURL: mockBaseURL,
      group: { type: "tag" },
      parser: "faker",
    }),
  ],
});
