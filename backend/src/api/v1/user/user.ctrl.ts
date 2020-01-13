import { Request, Response, NextFunction } from "express";
import Joi from "joi";

// 유저 정보 조회
export const loadUser = (req: Request, res: Response, next: NextFunction) => {};

// 회원가입
export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email()
        .max(50)
        .required(),
      password: Joi.string()
        .min(8)
        .max(20)
        .required(),
      passwordConfirm: Joi.string()
        .min(8)
        .max(20)
        .required()
    });

    const result = Joi.validate(req.body, schema);
    next(result.error);
  } catch (error) {
    next(error);
  }
};
