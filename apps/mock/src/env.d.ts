declare namespace NodeJS {
  interface ProcessEnv {
    AUTH_SECRET: string;
    AUTH_API_BASE_URL: string;
    AUTH_CORS_ORIGINS: string;
    AUTH_SESSION_STRATEGY: "compact" | "jwt" | "jwe";

    MOCK_TODO_API_BASE_URL: string;
  }
}
