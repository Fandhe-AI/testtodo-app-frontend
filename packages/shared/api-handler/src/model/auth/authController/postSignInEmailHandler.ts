import type { PostSignInEmailMutationResponse, PostSignInEmail401 } from "../../../../../api-type/src/model/auth/authController/PostSignInEmail";
import { createPostSignInEmailMutationResponse } from "../../../../../api-mock/src/model/auth/authController/createPostSignInEmail";
import { http } from "msw";

export function postSignInEmailHandlerResponse200(data: PostSignInEmailMutationResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postSignInEmailHandlerResponse401(data: PostSignInEmail401) {
  return new Response(JSON.stringify(data), {
    status: 401,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postSignInEmailHandler(data?: PostSignInEmailMutationResponse | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.post('http://localhost:8001/auth/sign-in/email', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createPostSignInEmailMutationResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}