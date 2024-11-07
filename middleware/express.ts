import express, { Express } from 'express';

export const mountExpressMiddleware = (app: Express) => {
  app.use(express.json());
};