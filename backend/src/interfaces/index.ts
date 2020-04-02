import { Request } from "express";
import { Document, Schema } from "mongoose";

import { IUserSchema } from "./IUser";

export interface IUserRequest extends Request {
  user?: IUserSchema;
  isAuthenticated?: boolean;
}
