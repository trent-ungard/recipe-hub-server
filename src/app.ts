import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './config/env';
import { usersRouter } from './routers';
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app: Express = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Recipe Hub Docs",
      version: "1.0.0",
      description:
        "This is the Swagger API documentation for Recipe Hub.",
    },
  },
  apis: ["./routers/*.ts"], // files containing annotations as above
};

const swaggerSpec = swaggerJsDoc(options);
console.log('swagger spec', swaggerSpec);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/users', usersRouter);

const createApp = () => {
  app.get('/', (_: Request, res: Response) => {
    res.send('Hello world!');
  })

  app.listen(PORT, () => {
    console.log('server listening on port ' + PORT)
  });  
};

export { app };
export default createApp;