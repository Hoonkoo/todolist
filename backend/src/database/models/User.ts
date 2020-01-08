import mongoose from "mongoose";

import { ITodo } from "./Todo";

export interface IUser extends mongoose.Document {
  content: string;
  isChecked: boolean;
  todoList: Array<ITodo["_id"]>;
}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    todoList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }]
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IUser>("User", UserSchema);
