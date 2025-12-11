import type { LoginPageSearchParams } from "@repo/pages-login/model";
import { LoginPage } from "@repo/pages-login/ui";
import { login } from "./actions";

type Props = {
  searchParams: Promise<LoginPageSearchParams>;
};

/**
 * ログインページ
 *
 * 未認証ユーザーがアクセスするログインページです。
 * ログイン成功後は callbackURL パラメータで指定されたURLにリダイレクトします。
 */
export default (props: Props) => {
  return <LoginPage searchParams={props.searchParams} login={login} />;
};
