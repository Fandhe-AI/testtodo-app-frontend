import type { GetHealthQueryResponse, GetHealth500 } from "../../../../../api-type/src/model/auth/healthController/GetHealth";
import { createGetHealthQueryResponse } from "../../../../../api-mock/src/model/auth/healthController/createGetHealth";
import { http } from "msw";

export function getHealthHandlerResponse200(data: GetHealthQueryResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getHealthHandlerResponse500(data: GetHealth500) {
  return new Response(JSON.stringify(data), {
    status: 500,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getHealthHandler(data?: GetHealthQueryResponse | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.get('http://localhost:8001/auth/health', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createGetHealthQueryResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}