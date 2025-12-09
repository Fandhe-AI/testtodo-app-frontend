import type { PostCategoriesMutationResponse, PostCategories400, PostCategories401, PostCategories422, PostCategories500 } from "../../../../../api-type/src/model/todo/categoriesController/PostCategories";
import { createPostCategoriesMutationResponse } from "../../../../../api-mock/src/model/todo/categoriesController/createPostCategories";
import { http } from "msw";

export function postCategoriesHandlerResponse201(data: PostCategoriesMutationResponse) {
  return new Response(JSON.stringify(data), {
    status: 201,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postCategoriesHandlerResponse400(data: PostCategories400) {
  return new Response(JSON.stringify(data), {
    status: 400,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postCategoriesHandlerResponse401(data: PostCategories401) {
  return new Response(JSON.stringify(data), {
    status: 401,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postCategoriesHandlerResponse422(data: PostCategories422) {
  return new Response(JSON.stringify(data), {
    status: 422,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postCategoriesHandlerResponse500(data: PostCategories500) {
  return new Response(JSON.stringify(data), {
    status: 500,
      headers: {
      'Content-Type': 'application/json'
    },
  })
}

export function postCategoriesHandler(data?: PostCategoriesMutationResponse | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Response | Promise<Response>)) {
  return http.post('http://localhost:8001/todo/categories', function handler(info) {
    if(typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data || createPostCategoriesMutationResponse(data)), {
      status: 201,
        headers: {
        'Content-Type': 'application/json'
      },
    })
  })
}