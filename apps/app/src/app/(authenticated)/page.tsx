import { headers } from "next/headers";
import { auth } from "~/lib/auth";

/**
 * ホームページ
 *
 * 認証チェックはLayoutで行われるため、ここではセッション取得のみ
 */
export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="page">
      <h1>Hello World</h1>
      <p>Welcome, {session?.user.name ?? session?.user.email}</p>
    </div>
  );
}
