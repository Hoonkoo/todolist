import * as express from "express";

import todoRouter from "./todo";
import userRouter from "./user";

const V1Router = express.Router();

V1Router.use("/todo", todoRouter);
V1Router.use("/user", userRouter);

export default V1Router;
