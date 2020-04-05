import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import createHttpError = require("http-errors");

import User from "@/db/models/User";
import { IUserRequest, IToken } from "@/interfaces";

export const isLoggedIn = (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated) {
    next();
  } else {
    next(createHttpError(401, "로그인 후 이용해주세요"));
  }
};

export default function auth() {
  const { TOKEN_SECRET, NODE_ENV, SUBDOMAIN } = process.env;

  return async function (req: IUserRequest, res: Response, next: NextFunction) {
    try {
      const { token } = req.cookies;

      req.isAuthenticated = false;

      // 토큰 미존재시
      if (!token) {
        return next();
      }

      const decodedToken = await jwt.verify(token, TOKEN_SECRET!);

      const user = await User.findById((decodedToken as { id: string }).id);

      // 유저 미존재시
      if (!user) {
        return next();
      }
      req.user = user;
      req.isAuthenticated = true;

      // 만료 시간이 30분 이전일때 재발급
      if (
        (decodedToken as { exp: number }).exp * 1000 - Number(new Date()) <=
        1000 * 60 * 30
      ) {
        const encodeToken = await token.encodeToken(user!._id);

        res.cookie("token", encodeToken, {
          domain: NODE_ENV === "production" ? SUBDOMAIN! : undefined,
          httpOnly: true,
          secure: NODE_ENV === "production",
          maxAge: 1000 * 60 * 60 * 24 * 7, // 7h
        });
      }

      return next();
    } catch (error) {
      next(error);
    }
  };
}
