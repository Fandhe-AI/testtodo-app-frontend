import type { createRegister } from "@repo/features-auth";

/**
 * 登録ページの Search Params
 */
export type RegisterPageSearchParams = {
  /**
   * 登録成功時のリダイレクト先URL
   */
  callbackURL?: string;
};

/**
 * 登録ページ Props
 */
export type RegisterPageProps = {
  /**
   * 登録ページの Search Params
   */
  searchParams: Promise<RegisterPageSearchParams>;
  /**
   * 登録ページの Action
   */
  register: ReturnType<typeof createRegister>;
  /**
   * ページタイトル
   */
  title?: string;
};
