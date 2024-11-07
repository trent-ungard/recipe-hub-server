import { Express } from 'express';
import cors from 'cors';

const corsConfig = {
  origin: '*'
};

export const mountCorsMiddleware = (app: Express) => {
  app.use(
    cors(corsConfig)
  );
};