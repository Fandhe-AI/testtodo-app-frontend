/**
 * @description ログアウト成功
*/
export type PostSignOut200 = {
    /**
     * @type boolean | undefined
    */
    success?: boolean | undefined;
};

export type PostSignOutMutationResponse = PostSignOut200;

export type PostSignOutMutation = {
    Response: PostSignOut200;
    Errors: any;
};