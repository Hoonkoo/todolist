import { Request, Response, NextFunction } from "express";

import UserService from "@/services/v1/user";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await UserService.createUser(req.body);

    return res.status(200).send({ message: "회원가입이 완료되었습니다." });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserService.loginUser(req.body);

    return res.status(200).send({ message: "로그인에 성공하였습니다.", user });
  } catch (error) {
    next(error);
  }
};
