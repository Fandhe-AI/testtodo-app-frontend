/**
 * @description ページネーション情報
*/
export type Pagination = {
    /**
     * @description 現在のページ番号
     * @minLength 1
     * @type integer
    */
    page: number;
    /**
     * @description 1ページあたりの件数
     * @minLength 1
     * @type integer
    */
    limit: number;
    /**
     * @description 総件数
     * @minLength 0
     * @type integer
    */
    total: number;
    /**
     * @description 総ページ数
     * @minLength 0
     * @type integer
    */
    total_pages: number;
};