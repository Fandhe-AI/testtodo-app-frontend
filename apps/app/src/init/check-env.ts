import { logger } from "@repo/shared-lib-pino";
import { env, requiredEnvKeys } from "~/const/env";

export const checkEnv = async () => {
  const undefinedEnvKeys = Object.entries(env)
    .filter(([key]) =>
      requiredEnvKeys.includes(key as (typeof requiredEnvKeys)[number]),
    )
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (undefinedEnvKeys.length > 0) {
    throw new Error(
      `Required environment variables are not set. Please set ${undefinedEnvKeys.join(", ")}.`,
    );
  }

  logger.info("Environment variables are set correctly.");
};
