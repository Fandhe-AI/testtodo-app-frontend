import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

/**
 * セッションの有効期限（7日間）
 */
const SESSION_MAX_AGE = 7 * 24 * 60 * 60;

/**
 * セッション戦略を取得（無効な値の場合はデフォルト値を返す）
 */
const getSessionStrategy = (): "compact" | "jwt" | "jwe" => {
  const value = process.env.AUTH_SESSION_STRATEGY;
  if (value === "compact" || value === "jwt" || value === "jwe") {
    return value;
  }
  return "jwe";
};

/**
 * SQLiteデータベースインスタンス
 *
 * better-sqlite3を使用してローカルのSQLiteデータベースに接続します。
 * データベースファイルは `sqlite.db` として保存されます。
 */
const db = new Database("./src/sqlite.db");

/**
 * Better Auth インスタンス
 *
 * Better Auth を使用して認証機能を提供します。
 * このインスタンスは認証APIサーバーとして動作し、
 * ユーザーデータと認証処理を担当します。
 *
 * apps/app からの認証リクエストを受け付け、
 * セッションCookieを発行します。
 *
 * @see https://www.better-auth.com/docs/concepts/session-management#stateless-session-management
 */
export const auth = betterAuth({
  /**
   * SQLiteデータベース接続
   */
  database: db as Database.Database,
  /**
   * 秘密鍵（セッション署名用）
   * apps/app と同じ秘密鍵を使用する必要があります
   */
  secret: process.env.AUTH_SECRET,
  /**
   * ベースURL（認証エンドポイントのベースパス）
   */
  baseURL: process.env.AUTH_API_BASE_URL,
  /**
   * 信頼されたオリジン
   * apps/app (localhost:3000) からのリクエストを許可
   */
  trustedOrigins: process.env.AUTH_CORS_ORIGINS?.split(","),
  /**
   * メールとパスワードによる認証を有効化
   */
  emailAndPassword: {
    enabled: true,
  },
  /**
   * セッション設定
   *
   * cookieCache を有効にすることで、セッションデータを
   * 署名された Cookie に含めます。これにより apps/app で
   * データベースなしでセッションを検証できます。
   */
  session: {
    cookieCache: {
      enabled: true,
      maxAge: SESSION_MAX_AGE,
      strategy: getSessionStrategy(),
    },
    expiresIn: SESSION_MAX_AGE,
  },
  /**
   * 高度な設定
   */
  advanced: {
    /**
     * Cookie の設定
     * Server Action 経由で Cookie を転送するため、
     * 開発環境では sameSite: "lax" を使用
     */
    defaultCookieAttributes: {
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      path: "/",
    },
  },
});
