import type { RegisterPageSearchParams } from "@repo/pages-register/model";
import { RegisterPage } from "@repo/pages-register/ui";
import { register } from "./actions";

type Props = {
  searchParams: Promise<RegisterPageSearchParams>;
};

/**
 * 登録ページ
 *
 * 新規ユーザーがアカウントを作成するページです。
 * 登録成功後は callbackURL パラメータで指定されたURLにリダイレクトします。
 */
export default (props: Props) => {
  return <RegisterPage searchParams={props.searchParams} register={register} />;
};
