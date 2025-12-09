import type { GetTodosTodoidQueryResponse, GetTodosTodoid401, GetTodosTodoid404, GetTodosTodoid500 } from "../../../../../api-type/src/model/todo/todosController/GetTodosTodoid";
import { createGetTodosTodoidQueryResponse } from "../../../../../api-mock/src/model/todo/todosController/createGetTodosTodoid";
import { http } from "msw";

export function getTodosTodoidHandlerResponse200(data: GetTodosTodoidQueryResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getTodosTodoidHandlerResponse401(data: GetTodosTodoid401) {
  return new Response(JSON.stringify(data), {
    status: 401,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getTodosTodoidHandlerResponse404(data: GetTodosTodoid404) {
  return new Response(JSON.stringify(data), {
    status: 404,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getTodosTodoidHandlerResponse500(data: GetTodosTodoid500) {
  return new Response(JSON.stringify(data), {
    status: 500,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getTodosTodoidHandler(data?: GetTodosTodoidQueryResponse | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.get('http://localhost:8001/todo/todos/:todoId', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createGetTodosTodoidQueryResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}