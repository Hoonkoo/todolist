import * as express from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import * as hpp from "hpp";
import * as morgan from "morgan";

import database from "~/database";
import ApiRouter from "~/api";

export class App {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initialMiddlewares();
    this.initialRoutes();
  }

  private initialMiddlewares() {
    this.app.use(morgan("dev"));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(hpp());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private initialRoutes() {
    this.app.use("/api", ApiRouter);
  }

  public listen() {
    this.app.listen(this.port, () => {
      const { MONGO_URL } = process.env;
      console.log("server connected %s", this.port);
      database.connect();
    });
  }
}

export default App;
