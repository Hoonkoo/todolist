import * as mongoose from "mongoose";

import { IUserSchema } from "@/interfaces/IUser";

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
