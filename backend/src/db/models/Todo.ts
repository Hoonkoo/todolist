import * as mongoose from "mongoose";
import { IUserSchema } from "./User";

export interface ITodoSchema extends mongoose.Document {
  title: string;
  content: string;
  thumbnail?: string;
  writer: IUserSchema["_id"];
  flag: number;
}

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    thumbnail: String,
    writer: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    },
    flag: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

export const Todo = mongoose.model<ITodoSchema>("Todo", TodoSchema);

// export default Todo;
