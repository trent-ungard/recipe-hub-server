import express, { Express } from 'express';
import { mountMiddleware } from './middleware/index';
import { PORT } from './config/env';

const app: Express = express();

const createApp = () => {
  mountMiddleware();
  app.listen(PORT, () => {
    console.log('server listening on port ' + PORT)
  });
};

export { app };
export default createApp;