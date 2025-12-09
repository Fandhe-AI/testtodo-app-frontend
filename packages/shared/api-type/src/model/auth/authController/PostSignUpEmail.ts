import type { AuthError } from "../AuthError";
import type { AuthSession } from "../AuthSession";
import type { SignUpEmailRequest } from "../SignUpEmailRequest";

/**
 * @description 登録成功
*/
export type PostSignUpEmail200 = AuthSession;

/**
 * @description 登録失敗（メールアドレスが既に使用されているなど）
*/
export type PostSignUpEmail400 = AuthError;

export type PostSignUpEmailMutationRequest = SignUpEmailRequest;

export type PostSignUpEmailMutationResponse = PostSignUpEmail200;

export type PostSignUpEmailMutation = {
    Response: PostSignUpEmail200;
    Request: PostSignUpEmailMutationRequest;
    Errors: PostSignUpEmail400;
};