import type { CustomError } from "../CustomError";
import type { HealthResponse } from "../HealthResponse";

/**
 * @description 健康状態の確認に成功
*/
export type GetHealth200 = HealthResponse;

/**
 * @description サーバー内部エラー
*/
export type GetHealth500 = CustomError;

export type GetHealthQueryResponse = GetHealth200;

export type GetHealthQuery = {
    Response: GetHealth200;
    Errors: GetHealth500;
};