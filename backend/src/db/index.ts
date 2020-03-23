import * as mongoose from "mongoose";

import Todo from "@/db/models/Todo";
import User from "@/db/models/User";

import { IDB } from "@/interfaces/IDB";

const { MONGO_URI } = process.env;
export default (function(): IDB {
  const db = mongoose.connection;

  return {
    // 모델링
    Models: {
      Todo,
      User
    },
    // 연결
    connect() {
      console.log("start to connect db server");
      mongoose.connect(String(MONGO_URI!), {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      db.on("error", console.error.bind(console, "connection error:"));
      db.once("open", () => {
        // we're connected!
        console.log("db server connected");
      });
    }
  };
})();
