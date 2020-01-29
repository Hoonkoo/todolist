import * as mongoose from "mongoose";

export default class Database {
  public static connect() {
    const { MONGO_URL: url } = process.env;

    mongoose.connect(String(url));
    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function(): void {
      // we're connected!
      console.log("db connected");
    });
  }
}
