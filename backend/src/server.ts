import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import createError from "http-errors";

import database from "~/database";
import ApiRouter from "~/api";

import "dotenv/config";

interface HttpError {
  statusCode?: number;
  message: string;
}

const app = express();

const { PORT, NODE_ENV: env, MONGO_URL } = process.env;
const port = env === "production" ? 80 : PORT;

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", ApiRouter);

// 404 error handling
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handling
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log(error.message, error.statusCode);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    return res.status(error.statusCode).send({
      statusCode: error.statusCode,
      message: error.message
    });
  }
});

app.listen(port, () => {
  console.log("server connected %s", port);
  database.connect(MONGO_URL);
});
