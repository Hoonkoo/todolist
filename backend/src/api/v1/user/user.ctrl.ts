import { Request, Response, NextFunction } from "express";
import createHttpError = require("http-errors");

import UserService from "@/services/v1/user";
import token from "@/libs/token";
import { IUserRequest } from "@/interfaces";

const { NODE_ENV, SUBDOMAIN } = process.env;

export const loadUser = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const resultUser = Object.assign({}, req.user?.toJSON());

  delete resultUser.password;
  return res
    .status(200)
    .send({ message: "유저 정보를 조회하였습니다.", user: resultUser });
};

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

    // 유저가 존재하지 않을시
    if (!user) {
      throw createHttpError(400, "아이디 또는 비밀번호가 일치하지 않습니다.");
    }

    const encodeToken = await token.encodeToken(user!._id);

    res.cookie("token", encodeToken, {
      domain: NODE_ENV === "production" ? SUBDOMAIN! : undefined,
      httpOnly: true,
      secure: NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7h
    });

    return res.status(200).send({ message: "로그인에 성공하였습니다.", user });
  } catch (error) {
    next(error);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.cookie("token", null, {
      domain: NODE_ENV === "production" ? SUBDOMAIN! : undefined,
      httpOnly: true,
      secure: NODE_ENV === "production",
      maxAge: 0, // 7h
    });

    // todo : redirect로 변경
    return res.status(200).send({ message: "로그아웃하였습니다." });
  } catch (error) {
    next(error);
  }
};
