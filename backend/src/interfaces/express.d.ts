import { IUserSchema } from "./IUser";
import { Document, Schema } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      user?: IUserSchema;
      isAuthenticated?: boolean;
    }
  }
}
