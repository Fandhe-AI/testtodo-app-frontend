"use server";

import {
  type CreateRequest,
  createCreate,
  createDelete,
  createGet,
  createToggle,
} from "@repo/features-todo/model";
import type { RequestConfig } from "@repo/shared-config-kubb";
import { todoRequestConfig } from "~/const/api";

/**
 * Todo リストを取得する Server Action
 */
export const getTodos = createGet(todoRequestConfig);

/**
 * Todo を作成する Server Action
 */
export const createTodo = createCreate(
  todoRequestConfig as Partial<RequestConfig<CreateRequest>>,
);

/**
 * Todo を削除する Server Action
 */
export const deleteTodo = createDelete(todoRequestConfig);

/**
 * Todo の完了状態をトグルする Server Action
 */
export const toggleTodo = createToggle(todoRequestConfig);
