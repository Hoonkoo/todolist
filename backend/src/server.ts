import * as express from "express";
import * as logger from "morgan";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as createError from "http-errors";

import ApiRouter from "./api";

dotenv.config();

const { DEV_PORT: port } = process.env;

const app = express();

app.use(logger("dev"));
app.use(cors({ origin: true }));
app.use("/api", ApiRouter);

// 404 error handler
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    next(createError(404, "Not Found"));
  }
);

interface IError extends Error {
  status: number;
}

// global error handler
app.use(
  (
    error: IError,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(error.status || 500).send(error.message);
  }
);

app.listen(port, () => {
  console.log("server conneted in port : %s", port);
});
