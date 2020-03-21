import * as mongoose from "mongoose";
import { IUserSchema } from "./User";

export interface ITodoSchema extends mongoose.Document {
  title: string;
  content: string;
  thumbnail: string;
  writer: IUserSchema["_id"];
}

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    thumbnail: String,
    writer: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

export default mongoose.model<ITodoSchema>("Todo", TodoSchema);
