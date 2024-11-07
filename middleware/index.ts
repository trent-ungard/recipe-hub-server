import { Express } from "express";
import { mountCorsMiddleware } from "./cors";
import { mountExpressMiddleware } from "./express";
import { mountSwaggerMiddleware } from "./swagger";

export const mountMiddleware = (app: Express) => {
  mountCorsMiddleware(app);
  mountExpressMiddleware(app);
  mountSwaggerMiddleware(app);
};