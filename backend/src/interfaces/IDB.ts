import { ITodoSchema } from "./ITodo";
import { IUserSchema } from "./IUser";
import * as mongoose from "mongoose";

export interface IDB {
  connect(): void;
  Models: {
    Todo: mongoose.Model<ITodoSchema>;
    User: mongoose.Model<IUserSchema>;
  };
}
