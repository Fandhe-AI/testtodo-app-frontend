import type { PostSignOutMutationResponse } from "../../../../../api-type/src/model/auth/authController/PostSignOut";
import { createPostSignOutMutationResponse } from "../../../../../api-mock/src/model/auth/authController/createPostSignOut";
import { http } from "msw";

export function postSignOutHandlerResponse200(data: PostSignOutMutationResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postSignOutHandler(data?: PostSignOutMutationResponse | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.post('http://localhost:8001/auth/sign-out', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createPostSignOutMutationResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}