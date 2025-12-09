import type { createLogin } from "@repo/features-auth";

/**
 * ログインページの Search Params
 */
export type LoginPageSearchParams = {
  /**
   * ログイン成功時のリダイレクト先URL
   */
  callbackURL?: string;
};

/**
 * ログインページ Props
 */
export type LoginPageProps = {
  /**
   * ログインページの Search Params
   */
  searchParams: Promise<LoginPageSearchParams>;
  /**
   * ログインページの Action
   */
  login: ReturnType<typeof createLogin>;
  /**
   * ページタイトル
   */
  title?: string;
};
