import cors from 'cors';
import { app } from '../app';

const corsConfig = {
  origin: '*'
};

export const mountCorsMiddleware = () => {
  app.use(
    cors(corsConfig)
  );
};