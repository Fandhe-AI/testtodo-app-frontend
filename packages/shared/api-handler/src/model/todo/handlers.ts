import { getCategoriesHandler } from "./categoriesController/getCategoriesHandler";
import { postCategoriesHandler } from "./categoriesController/postCategoriesHandler";
import { getHealthHandler } from "./healthController/getHealthHandler";
import { deleteTodosTodoidHandler } from "./todosController/deleteTodosTodoidHandler";
import { getTodosHandler } from "./todosController/getTodosHandler";
import { getTodosTodoidHandler } from "./todosController/getTodosTodoidHandler";
import { patchTodosTodoidToggleHandler } from "./todosController/patchTodosTodoidToggleHandler";
import { postTodosHandler } from "./todosController/postTodosHandler";
import { putTodosTodoidHandler } from "./todosController/putTodosTodoidHandler";

export const handlers = [getHealthHandler(),getTodosHandler(),postTodosHandler(),getTodosTodoidHandler(),putTodosTodoidHandler(),deleteTodosTodoidHandler(),patchTodosTodoidToggleHandler(),getCategoriesHandler(),postCategoriesHandler()] as const