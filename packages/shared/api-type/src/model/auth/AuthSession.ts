import type { AuthSessionInfo } from "./AuthSessionInfo";
import type { AuthUser } from "./AuthUser";

/**
 * @description 認証セッション（ユーザー情報とセッション情報を含む）
*/
export type AuthSession = {
    /**
     * @description 認証ユーザー情報
     * @type object
    */
    user: AuthUser;
    /**
     * @description セッション情報
     * @type object
    */
    session: AuthSessionInfo;
};