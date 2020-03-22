import * as express from "express";

const UserRouter = express.Router();

// load user
UserRouter.get("/");

// login
UserRouter.post("/login");

// logout
UserRouter.post("/logout");

// search user
UserRouter.get("/:userId");

// withdraw user
UserRouter.delete("/");

export default UserRouter;
