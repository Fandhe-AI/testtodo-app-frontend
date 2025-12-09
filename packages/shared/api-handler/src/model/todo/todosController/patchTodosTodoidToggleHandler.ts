import type { PatchTodosTodoidToggleMutationResponse, PatchTodosTodoidToggle401, PatchTodosTodoidToggle404, PatchTodosTodoidToggle500 } from "../../../../../api-type/src/model/todo/todosController/PatchTodosTodoidToggle";
import { createPatchTodosTodoidToggleMutationResponse } from "../../../../../api-mock/src/model/todo/todosController/createPatchTodosTodoidToggle";
import { http } from "msw";

export function patchTodosTodoidToggleHandlerResponse200(data: PatchTodosTodoidToggleMutationResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function patchTodosTodoidToggleHandlerResponse401(data: PatchTodosTodoidToggle401) {
  return new Response(JSON.stringify(data), {
    status: 401,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function patchTodosTodoidToggleHandlerResponse404(data: PatchTodosTodoidToggle404) {
  return new Response(JSON.stringify(data), {
    status: 404,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function patchTodosTodoidToggleHandlerResponse500(data: PatchTodosTodoidToggle500) {
  return new Response(JSON.stringify(data), {
    status: 500,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function patchTodosTodoidToggleHandler(data?: PatchTodosTodoidToggleMutationResponse | ((
        info: Parameters<Parameters<typeof http.patch>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.patch('http://localhost:8001/todo/todos/:todoId/toggle', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createPatchTodosTodoidToggleMutationResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}