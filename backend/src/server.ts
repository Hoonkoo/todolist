import "dotenv/config";

import * as express from "express";
import * as logger from "morgan";
import * as cors from "cors";
import * as createError from "http-errors";
import * as swaggerUi from "swagger-ui-express";
import { isCelebrate, CelebrateInternalError } from "celebrate";

import ApiRouter from "@/api";
import db from "@/db";

import { swaggerSpec } from "./config/swagger";

interface IError extends Error {
  status: number;
}

const { DEV_PORT: port } = process.env;

const app = express();

app.use(logger("dev"));
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", ApiRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// joi error handler
app.use(
  (
    error: CelebrateInternalError,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (isCelebrate(error)) {
      return res.send({
        status: 400,
        message: error.joi.message
      });
    }

    return next(error);
  }
);
// 404 error handler
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    next(createError(404, "Not Found"));
  }
);

// global error handler
app.use(
  (
    error: IError,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log(error);
    res.status(error.status || 500).send(error.message);
  }
);

app.listen(port, () => {
  console.log("server conneted in port : %s", port);
  db.connect();
});
