import * as dotenv from "dotenv";
import App from "./App";
//https://dev.to/aligoren/developing-an-express-application-using-typescript-3b1
dotenv.config();
const { PORT, NODE_ENV: env } = process.env;

const port: number = env === "production" ? 80 : Number(PORT);

const app = new App(port);

app.listen();
