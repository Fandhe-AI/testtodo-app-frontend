"use server";

import { todo } from "@repo/shared-api-client";
import { logger } from "@repo/shared-lib-pino";
import { todoRequestConfig } from "~/const/api";

export type HealthTestResult = {
  success: boolean;
  data?: unknown;
  error?: string;
  timestamp: string;
  duration?: number;
};

export const runHealthTest = async (): Promise<HealthTestResult> => {
  const startTime = Date.now();

  try {
    const data = await todo.getHealth(todoRequestConfig);

    const duration = Date.now() - startTime;

    logger.info("サーバーアクション API 呼び出し成功: %o", data);

    return {
      success: true,
      data,
      timestamp: new Date().toISOString(),
      duration,
    };
  } catch (error) {
    logger.error("サーバーアクション API 呼び出しエラー: %o", { error });

    const duration = Date.now() - startTime;

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
      duration,
    };
  }
};
