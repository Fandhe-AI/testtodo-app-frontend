import { todo } from "@repo/shared-api-handler";
import { setupServer } from "msw/node";

export const register = () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const server = setupServer(...todo.handlers);
    server.listen();
  }
};
