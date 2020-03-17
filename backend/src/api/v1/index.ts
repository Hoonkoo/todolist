import * as express from "express";

const V1Router = express.Router();

V1Router.use("/test", (req: express.Request, res: express.Response) => {
  res.send("굿");
});

export default V1Router;
