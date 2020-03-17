import * as express from "express";

import V1Router from "./v1";

const ApiRouter = express.Router();

ApiRouter.use("/v1", V1Router);

export default ApiRouter;
