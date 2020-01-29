import { Request, Response } from "express";
import Todo from "~/database/models/Todo";

export const getTodoList = async (req: Request, res: Response) => {
  try {
    const todoList = await Todo.find();
  } catch (error) {
    console.log(error);
  }
};
