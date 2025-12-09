import { CustomError } from "@repo/shared-error";
import { DEFAULT_TIMEOUT, getConfig, setConfig } from "./const";
import { parseErrors } from "./parse";
import type {
  RequestConfig,
  ResponseConfig,
  ResponseErrorConfig,
} from "./type";

export {
  setConfig,
  getConfig,
  type RequestConfig,
  type ResponseConfig,
  type ResponseErrorConfig,
};

export const client = async <TData, _TError = unknown, TVariables = unknown>(
  paramsConfig: RequestConfig<TVariables>,
): Promise<ResponseConfig<TData>> => {
  const normalizedParams = new URLSearchParams();
  const globalConfig = getConfig();
  const config = { ...globalConfig, ...paramsConfig };

  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  if ("signal" in config) {
    const controller = new AbortController();
    config.signal = controller.signal;

    timeoutId = setTimeout(() => {
      controller.abort();
    }, config.timeout || DEFAULT_TIMEOUT);
  }

  Object.entries(config.params || {}).forEach(([key, value]) => {
    if (value !== void 0) {
      normalizedParams.append(key, value === null ? "null" : value.toString());
    }
  });

  let targetUrl = [config.baseURL, config.url].filter(Boolean).join("");
  if (config.params) {
    targetUrl += `?${normalizedParams}`;
  }

  try {
    const response = await fetch(targetUrl, {
      credentials: config.credentials || "same-origin",
      method: config.method?.toUpperCase(),
      body: JSON.stringify(config.data),
      signal: config.signal,
      headers: config.headers,
    });

    clearTimeout(timeoutId);

    const data =
      [204, 205, 304].includes(response.status) || !response.body
        ? {}
        : await response.json();

    if (!response.ok) {
      const parsedErrors = parseErrors<TVariables>(data.errors);
      const fieldErrors = parsedErrors?.fieldErrors;
      const formErrors = parsedErrors?.formErrors;

      let errorCode: string;
      let detail: string;

      switch (response.status) {
        case 401:
          errorCode = data.errorCode || "UNAUTHORIZED";
          detail = data.detail || "Unauthorized";
          throw new CustomError(errorCode, detail, fieldErrors, formErrors);
        default:
          errorCode = data.errorCode || "UNKNOWN_ERROR";
          detail = data.detail || "Unknown error";
          throw new CustomError(errorCode, detail, fieldErrors, formErrors);
      }
    }

    return {
      data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof CustomError) {
      throw error;
    }

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new CustomError("ABORTED", "Request aborted");
      }

      throw new CustomError("UNKNOWN_ERROR", error.message);
    }

    throw new CustomError("UNKNOWN_ERROR", "Unknown error");
  }
};

client.getConfig = getConfig;
client.setConfig = setConfig;
