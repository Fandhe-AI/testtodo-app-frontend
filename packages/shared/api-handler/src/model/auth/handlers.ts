import { getSessionHandler } from "./authController/getSessionHandler";
import { postSignInEmailHandler } from "./authController/postSignInEmailHandler";
import { postSignOutHandler } from "./authController/postSignOutHandler";
import { postSignUpEmailHandler } from "./authController/postSignUpEmailHandler";
import { getHealthHandler } from "./healthController/getHealthHandler";

export const handlers = [getHealthHandler(),postSignInEmailHandler(),postSignUpEmailHandler(),postSignOutHandler(),getSessionHandler()] as const