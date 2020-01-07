import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";

import ApiRouter from "~/api";

import "dotenv/config";

const app = express();

const { PORT, NODE_ENV: env } = process.env;
const port = env === "production" ? 80 : PORT;

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", ApiRouter);

app.listen(port, () => {
  console.log("server connected %s", port);
});