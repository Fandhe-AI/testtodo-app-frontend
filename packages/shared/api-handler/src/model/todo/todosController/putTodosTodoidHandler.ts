import type { PutTodosTodoidMutationResponse, PutTodosTodoid400, PutTodosTodoid401, PutTodosTodoid404, PutTodosTodoid422, PutTodosTodoid500 } from "../../../../../api-type/src/model/todo/todosController/PutTodosTodoid";
import { createPutTodosTodoidMutationResponse } from "../../../../../api-mock/src/model/todo/todosController/createPutTodosTodoid";
import { http } from "msw";

export function putTodosTodoidHandlerResponse200(data: PutTodosTodoidMutationResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function putTodosTodoidHandlerResponse400(data: PutTodosTodoid400) {
  return new Response(JSON.stringify(data), {
    status: 400,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function putTodosTodoidHandlerResponse401(data: PutTodosTodoid401) {
  return new Response(JSON.stringify(data), {
    status: 401,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function putTodosTodoidHandlerResponse404(data: PutTodosTodoid404) {
  return new Response(JSON.stringify(data), {
    status: 404,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function putTodosTodoidHandlerResponse422(data: PutTodosTodoid422) {
  return new Response(JSON.stringify(data), {
    status: 422,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function putTodosTodoidHandlerResponse500(data: PutTodosTodoid500) {
  return new Response(JSON.stringify(data), {
    status: 500,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function putTodosTodoidHandler(data?: PutTodosTodoidMutationResponse | ((
        info: Parameters<Parameters<typeof http.put>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.put('http://localhost:8001/todo/todos/:todoId', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createPutTodosTodoidMutationResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}