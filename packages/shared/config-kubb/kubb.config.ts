import { defineConfig } from "@kubb/core";
import dotenv from "dotenv";
import { generateConfig } from "./src/model";

dotenv.config();

const config: ReturnType<typeof defineConfig> = defineConfig([
  generateConfig("auth", process.env.MOCK_AUTH_API_BASE_URL ?? ""),
  generateConfig("todo", process.env.MOCK_TODO_API_BASE_URL ?? ""),
]);

export default config;
