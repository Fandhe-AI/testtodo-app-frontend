/**
 * @description 認証ユーザー情報
*/
export type AuthUser = {
    /**
     * @description ユーザーの一意識別子
     * @type string
    */
    id: string;
    /**
     * @description メールアドレス
     * @type string, email
    */
    email: string;
    /**
     * @description ユーザー名
     * @type string | undefined
    */
    name?: string | undefined;
    /**
     * @description メールアドレスが確認済みかどうか
     * @type boolean
    */
    emailVerified: boolean;
    /**
     * @description プロフィール画像の URL
     * @type string
    */
    image?: (string | null) | undefined;
    /**
     * @description アカウント作成日時
     * @type string, date-time
    */
    createdAt: string;
    /**
     * @description 最終更新日時
     * @type string, date-time
    */
    updatedAt: string;
};