/**
 * @description エラー情報
*/
export type CustomError = {
    /**
     * @type object
    */
    error: {
        /**
         * @description エラーコード
         * @type string
        */
        code: string;
        /**
         * @description エラーメッセージ
         * @type string
        */
        message: string;
        /**
         * @description 詳細なエラー情報（バリデーションエラー時など）
         * @type array | undefined
        */
        details?: {
            /**
             * @description エラーが発生したフィールド名
             * @type string
            */
            field: string;
            /**
             * @description フィールド固有のエラーメッセージ
             * @type string
            */
            message: string;
        }[] | undefined;
    };
};