import type { AuthSessionInfo } from "./AuthSessionInfo";
import type { AuthUser } from "./AuthUser";

/**
 * @description 認証セッション（存在しない場合は空オブジェクト）
*/
export type AuthSessionOrNull = {
    /**
     * @description 認証ユーザー情報
     * @type object | undefined
    */
    user?: AuthUser | undefined;
    /**
     * @description セッション情報
     * @type object | undefined
    */
    session?: AuthSessionInfo | undefined;
} | null;