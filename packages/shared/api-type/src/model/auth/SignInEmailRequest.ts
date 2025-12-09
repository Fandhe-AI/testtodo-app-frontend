/**
 * @description メールログインのリクエストボディ
*/
export type SignInEmailRequest = {
    /**
     * @description メールアドレス
     * @type string, email
    */
    email: string;
    /**
     * @description パスワード
     * @minLength 8
     * @type string, password
    */
    password: string;
};