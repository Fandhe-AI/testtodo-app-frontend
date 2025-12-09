declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;
    AUTH_SESSION_SECRET: string;

    NEXT_PUBLIC_API_TIMEOUT: string;
    AUTH_API_BASE_URL: string;
    TODO_API_BASE_URL: string;
  }
}
