import * as mongoose from "mongoose";

import { ITodoSchema } from "./ITodo";

export interface IUserSchema extends mongoose.Document {
  userId: string;
  password: string;
  name: string;
  todos?: Array<ITodoSchema["_id"]>;
  lastLoggedIn: Date | null;
}

export interface IUserInputDTO {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
}
