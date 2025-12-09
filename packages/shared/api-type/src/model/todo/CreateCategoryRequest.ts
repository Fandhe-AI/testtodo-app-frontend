/**
 * @description カテゴリ作成時のリクエストボディ
*/
export type CreateCategoryRequest = {
    /**
     * @description カテゴリ名（必須）
     * @minLength 1
     * @maxLength 50
     * @type string
    */
    name: string;
    /**
     * @description カテゴリの説明（任意）
     * @maxLength 200
     * @type string
    */
    description?: (string | null) | undefined;
    /**
     * @description カテゴリの表示色（HEXカラーコード、必須）
     * @pattern ^#[0-9a-fA-F]{6}$
     * @type string
    */
    color: string;
};