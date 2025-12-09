import type { PostSignUpEmailMutationResponse, PostSignUpEmail400 } from "../../../../../api-type/src/model/auth/authController/PostSignUpEmail";
import { createPostSignUpEmailMutationResponse } from "../../../../../api-mock/src/model/auth/authController/createPostSignUpEmail";
import { http } from "msw";

export function postSignUpEmailHandlerResponse200(data: PostSignUpEmailMutationResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postSignUpEmailHandlerResponse400(data: PostSignUpEmail400) {
  return new Response(JSON.stringify(data), {
    status: 400,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postSignUpEmailHandler(data?: PostSignUpEmailMutationResponse | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.post('http://localhost:8001/auth/sign-up/email', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createPostSignUpEmailMutationResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}