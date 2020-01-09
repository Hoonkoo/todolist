import { Request, Response, NextFunction } from "express";

export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const isNotLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
