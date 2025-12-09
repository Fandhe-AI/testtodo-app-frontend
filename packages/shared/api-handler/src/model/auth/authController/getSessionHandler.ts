import type { GetSessionQueryResponse } from "../../../../../api-type/src/model/auth/authController/GetSession";
import { createGetSessionQueryResponse } from "../../../../../api-mock/src/model/auth/authController/createGetSession";
import { http } from "msw";

export function getSessionHandlerResponse200(data: GetSessionQueryResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getSessionHandler(data?: GetSessionQueryResponse | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.get('http://localhost:8001/auth/session', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createGetSessionQueryResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}