export const AuthErrorCode = {
    "INVALID_CREDENTIALS": "INVALID_CREDENTIALS",
    "USER_NOT_FOUND": "USER_NOT_FOUND",
    "USER_ALREADY_EXISTS": "USER_ALREADY_EXISTS",
    "INVALID_EMAIL": "INVALID_EMAIL",
    "WEAK_PASSWORD": "WEAK_PASSWORD",
    "SESSION_EXPIRED": "SESSION_EXPIRED",
    "UNAUTHORIZED": "UNAUTHORIZED"
} as const;

type AuthErrorCode = (typeof AuthErrorCode)[keyof typeof AuthErrorCode];

/**
 * @description 認証エラー
*/
export type AuthError = {
    /**
     * @description エラーコード
     * @type string
    */
    code: AuthErrorCode;
    /**
     * @description エラーメッセージ
     * @type string
    */
    message: string;
};