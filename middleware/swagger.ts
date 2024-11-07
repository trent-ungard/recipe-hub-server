import { Express } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
//import all routers here
import { usersRouter } from '../routers/index';

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

export const mountSwaggerMiddleware = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // attach all routers here
  app.use('/users', usersRouter);
};