import { Request, Response, NextFunction } from "express";

import { CreateUser } from "@/services/v1/user";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id, password, passwordConfirm, name } = req.body;
  try {
    await CreateUser(req.body);
    return res.status(200).send({ message: "gg" });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
