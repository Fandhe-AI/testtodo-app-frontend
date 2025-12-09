import type { AuthError } from "../AuthError";
import type { AuthSession } from "../AuthSession";
import type { SignInEmailRequest } from "../SignInEmailRequest";

/**
 * @description ログイン成功
*/
export type PostSignInEmail200 = AuthSession;

/**
 * @description 認証失敗
*/
export type PostSignInEmail401 = AuthError;

export type PostSignInEmailMutationRequest = SignInEmailRequest;

export type PostSignInEmailMutationResponse = PostSignInEmail200;

export type PostSignInEmailMutation = {
    Response: PostSignInEmail200;
    Request: PostSignInEmailMutationRequest;
    Errors: PostSignInEmail401;
};