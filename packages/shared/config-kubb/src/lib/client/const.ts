import type { RequestConfig } from "./type";

export const DEFAULT_TIMEOUT = 10_000;

let _config: RequestConfig = {};

export const setConfig = (config: RequestConfig) => {
  _config = config;
};

export const getConfig = () => _config;
