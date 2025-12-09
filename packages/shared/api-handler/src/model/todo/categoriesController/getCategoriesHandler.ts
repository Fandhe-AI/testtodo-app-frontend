import type { GetCategoriesQueryResponse, GetCategories401, GetCategories500 } from "../../../../../api-type/src/model/todo/categoriesController/GetCategories";
import { createGetCategoriesQueryResponse } from "../../../../../api-mock/src/model/todo/categoriesController/createGetCategories";
import { http } from "msw";

export function getCategoriesHandlerResponse200(data: GetCategoriesQueryResponse) {
  return new Response(JSON.stringify(data), {
    status: 200,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getCategoriesHandlerResponse401(data: GetCategories401) {
  return new Response(JSON.stringify(data), {
    status: 401,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getCategoriesHandlerResponse500(data: GetCategories500) {
  return new Response(JSON.stringify(data), {
    status: 500,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function getCategoriesHandler(data?: GetCategoriesQueryResponse | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.get('http://localhost:8001/todo/categories', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createGetCategoriesQueryResponse(data)), {
      status: 200,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}