/**
 * @description メール登録のリクエストボディ
*/
export type SignUpEmailRequest = {
    /**
     * @description メールアドレス
     * @type string, email
    */
    email: string;
    /**
     * @description パスワード（8文字以上）
     * @minLength 8
     * @type string, password
    */
    password: string;
    /**
     * @description ユーザー名
     * @minLength 1
     * @maxLength 100
     * @type string
    */
    name: string;
};