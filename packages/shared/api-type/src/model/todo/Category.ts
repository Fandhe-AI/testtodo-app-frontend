/**
 * @description カテゴリを表現するオブジェクト
*/
export type Category = {
    /**
     * @description カテゴリの一意識別子
     * @type string
    */
    id: string;
    /**
     * @description カテゴリ名
     * @minLength 1
     * @maxLength 50
     * @type string
    */
    name: string;
    /**
     * @description カテゴリの説明
     * @maxLength 200
     * @type string
    */
    description?: (string | null) | undefined;
    /**
     * @description カテゴリの表示色（HEXカラーコード）
     * @pattern ^#[0-9a-fA-F]{6}$
     * @type string
    */
    color: string;
    /**
     * @description 作成日時（ISO 8601形式）
     * @type string, date-time
    */
    created_at: string;
};