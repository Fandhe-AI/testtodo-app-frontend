/**
 * @description 成功情報
*/
export type CustomSuccess = {
    /**
     * @description 成功フラグ
     * @type boolean
    */
    success: boolean;
    /**
     * @description 成功メッセージ
     * @type string | undefined
    */
    message?: string | undefined;
};