/**
 * @description セッション情報
*/
export type AuthSessionInfo = {
    /**
     * @description セッションの一意識別子
     * @type string
    */
    id: string;
    /**
     * @description ユーザーの一意識別子
     * @type string
    */
    userId: string;
    /**
     * @description セッションの有効期限
     * @type string, date-time
    */
    expiresAt: string;
};