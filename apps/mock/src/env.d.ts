declare namespace NodeJS {
  interface ProcessEnv {
    AUTH_SECRET: string;
    AUTH_API_BASE_URL: string;
    AUTH_CORS_ORIGINS: string;

    MOCK_TODO_API_BASE_URL: string;
  }
}
