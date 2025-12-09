export const env = {
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  AUTH_SESSION_SECRET: process.env.AUTH_SESSION_SECRET,
  NEXT_PUBLIC_API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT
    ? parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT, 10)
    : (undefined as number | undefined),
  AUTH_API_BASE_URL: process.env.AUTH_API_BASE_URL,
  TODO_API_BASE_URL: process.env.TODO_API_BASE_URL,
} as const;

export const requiredEnvKeys = [
  "NEXT_PUBLIC_BASE_URL",
  "AUTH_SESSION_SECRET",
  "NEXT_PUBLIC_API_TIMEOUT",
  "AUTH_API_BASE_URL",
  "TODO_API_BASE_URL",
] as const;
