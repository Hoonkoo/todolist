import mongoose from "mongoose";

import { IUser } from "./User";

export interface ITodo extends mongoose.Document {
  content: string;
  isChecked: boolean;
  writer: IUser["_id"];
}

const TodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      maxlength: 50
    },
    isChecked: {
      type: Boolean,
      required: true,
      default: false
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<ITodo>("Todo", TodoSchema);
