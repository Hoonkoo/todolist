import * as express from "express";

const TodoRouter = express.Router();

// get todoList
TodoRouter.get("/");

// get todo
TodoRouter.get("/:todoId");

// create todo
TodoRouter.post("/");

// edit todo
TodoRouter.put("/:todoId");

// remove todo
TodoRouter.delete("/:todoId");

export default TodoRouter;
