import type { AuthSessionOrNull } from "../AuthSessionOrNull";

/**
 * @description セッション情報
*/
export type GetSession200 = AuthSessionOrNull | null;

export type GetSessionQueryResponse = GetSession200;

export type GetSessionQuery = {
    Response: GetSession200;
    Errors: any;
};