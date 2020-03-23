import * as mongoose from "mongoose";

import { IUserSchema } from "./IUser";

export interface ITodoSchema extends mongoose.Document {
  title: string;
  content: string;
  thumbnail?: string;
  writer: IUserSchema["_id"];
  flag: number;
}
