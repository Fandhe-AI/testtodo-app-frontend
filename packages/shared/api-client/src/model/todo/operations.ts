export const operations = {
  "get_health": {
    "path": "/health",
    "method": "get"
  },
  "get_todos": {
    "path": "/todos",
    "method": "get"
  },
  "post_todos": {
    "path": "/todos",
    "method": "post"
  },
  "get_todos-todoid": {
    "path": "/todos/:todoId",
    "method": "get"
  },
  "put_todos-todoid": {
    "path": "/todos/:todoId",
    "method": "put"
  },
  "delete_todos-todoid": {
    "path": "/todos/:todoId",
    "method": "delete"
  },
  "patch_todos-todoid-toggle": {
    "path": "/todos/:todoId/toggle",
    "method": "patch"
  },
  "get_categories": {
    "path": "/categories",
    "method": "get"
  },
  "post_categories": {
    "path": "/categories",
    "method": "post"
  }
}