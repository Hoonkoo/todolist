import * as express from "express";
import * as api from "./todo.ctrl";

const router = express.Router();

router.get("/", api.getTodoList);

export default router;
