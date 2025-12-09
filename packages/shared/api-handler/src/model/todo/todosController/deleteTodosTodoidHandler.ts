import type { DeleteTodosTodoidMutationResponse, DeleteTodosTodoid401, DeleteTodosTodoid404, DeleteTodosTodoid500 } from "../../../../../api-type/src/model/todo/todosController/DeleteTodosTodoid";
import { createDeleteTodosTodoidMutationResponse } from "../../../../../api-mock/src/model/todo/todosController/createDeleteTodosTodoid";
import { http } from "msw";

export function deleteTodosTodoidHandlerResponse200(data: DeleteTodosTodoidMutationResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function deleteTodosTodoidHandlerResponse401(data: DeleteTodosTodoid401) {
  return new Response(JSON.stringify(data), {
    status: 401,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function deleteTodosTodoidHandlerResponse404(data: DeleteTodosTodoid404) {
  return new Response(JSON.stringify(data), {
    status: 404,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function deleteTodosTodoidHandlerResponse500(data: DeleteTodosTodoid500) {
  return new Response(JSON.stringify(data), {
    status: 500,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function deleteTodosTodoidHandler(data?: DeleteTodosTodoidMutationResponse | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.delete('http://localhost:8001/todo/todos/:todoId', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createDeleteTodosTodoidMutationResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}