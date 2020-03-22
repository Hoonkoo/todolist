import * as mongoose from "mongoose";
import { ITodoSchema } from "./Todo";

export interface IUserSchema extends mongoose.Document {
  user_id: string;
  name: string;
  todos?: Array<ITodoSchema["_id"]>;
  lastLoggedIn: Date | null;
}

const UserSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    todos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Todo"
      }
    ],
    lastLoggedIn: Date
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model<IUserSchema>("User", UserSchema);

export default User;
