import * as mongoose from "mongoose";
import { ITodoSchema } from "./Todo";

export interface IUserSchema extends mongoose.Document {
  user_id: string;
  name: string;
}

const UserSchema = new mongoose.Schema(
  {
    userId: String,
    name: String,
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

export default mongoose.model<IUserSchema>("User", UserSchema);
