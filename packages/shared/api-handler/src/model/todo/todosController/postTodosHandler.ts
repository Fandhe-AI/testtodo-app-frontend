import type { PostTodosMutationResponse, PostTodos400, PostTodos401, PostTodos422, PostTodos500 } from "../../../../../api-type/src/model/todo/todosController/PostTodos";
import { createPostTodosMutationResponse } from "../../../../../api-mock/src/model/todo/todosController/createPostTodos";
import { http } from "msw";

export function postTodosHandlerResponse201(data: PostTodosMutationResponse) {
  return new Response(JSON.stringify(data), {
    status: 201,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postTodosHandlerResponse400(data: PostTodos400) {
  return new Response(JSON.stringify(data), {
    status: 400,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postTodosHandlerResponse401(data: PostTodos401) {
  return new Response(JSON.stringify(data), {
    status: 401,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postTodosHandlerResponse422(data: PostTodos422) {
  return new Response(JSON.stringify(data), {
    status: 422,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postTodosHandlerResponse500(data: PostTodos500) {
  return new Response(JSON.stringify(data), {
    status: 500,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postTodosHandler(data?: PostTodosMutationResponse | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.post('http://localhost:8001/todo/todos', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createPostTodosMutationResponse(data)), {
      status: 201,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}