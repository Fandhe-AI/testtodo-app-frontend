import type { GetTodosQueryResponse, GetTodos400, GetTodos401, GetTodos500 } from "../../../../../api-type/src/model/todo/todosController/GetTodos";
import { createGetTodosQueryResponse } from "../../../../../api-mock/src/model/todo/todosController/createGetTodos";
import { http } from "msw";

export function getTodosHandlerResponse200(data: GetTodosQueryResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getTodosHandlerResponse400(data: GetTodos400) {
  return new Response(JSON.stringify(data), {
    status: 400,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getTodosHandlerResponse401(data: GetTodos401) {
  return new Response(JSON.stringify(data), {
    status: 401,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getTodosHandlerResponse500(data: GetTodos500) {
  return new Response(JSON.stringify(data), {
    status: 500,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getTodosHandler(data?: GetTodosQueryResponse | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.get('http://localhost:8001/todo/todos', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createGetTodosQueryResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}