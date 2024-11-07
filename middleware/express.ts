import express from 'express';
import { app } from '../app';

export const mountExpressMiddleware = () => {
  app.use(express.json());
};