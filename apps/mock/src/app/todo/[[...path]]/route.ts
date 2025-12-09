import { createHandler } from "../../../util/create-handler";

const handler = createHandler(process.env.MOCK_TODO_API_BASE_URL);

export const GET = handler;
export const POST = handler;
export const HEAD = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const OPTIONS = handler;
