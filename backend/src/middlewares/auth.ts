import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import createHttpError = require("http-errors");

import User from "@/db/models/User";
import { IUserRequest } from "@/interfaces";

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
  const { TOKEN_SECRET } = process.env;

  return async function(req: IUserRequest, res: Response, next: NextFunction) {
    try {
      const { token } = req.cookies;

      req.isAuthenticated = false;

      // 토큰 미존재시
      if (!token) {
        next();
      }

      const decodedToken = await jwt.verify(token, TOKEN_SECRET!);

      const user = await User.findById((decodedToken as { id: string }).id);

      // 유저 미존재시
      if (!user) {
        next();
      }

      const resultUser = Object.assign({}, user);

      delete resultUser.password;

      req.user = resultUser;
      req.isAuthenticated = true;

      next();
    } catch (error) {
      next(error);
    }
  };
}
