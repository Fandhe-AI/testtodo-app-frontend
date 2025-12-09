import Link from "next/link";

export default () => {
  return (
    <div>
      <h1>トップ</h1>
      <ul>
        <li>
          <h2>API テスト</h2>
          <ul>
            <li>
              <Link href="./api-test/health">ヘルスチェック</Link>
            </li>
            <li>
              <Link href="./api-test/dev-login-as-id/st0001">
                スタッフログインAPI（開発環境用）
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
