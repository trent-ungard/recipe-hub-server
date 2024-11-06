import { Request, Response } from "express";
import { usersModel } from "../models";

export const getUsers = async (_: Request, res: Response) => {
  const users = await usersModel.getUsers();
  return res.json(users);
};
