import mongoose from "mongoose";

interface Database {
  connect: Function;
}

export default (function(): Database {
  return {
    connect(MONGO_URL: string): void {
      mongoose.connect(`${MONGO_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      const db = mongoose.connection;
      db.on("error", console.error.bind(console, "connection error:"));
      db.once("open", function(): void {
        // we're connected!
        console.log("db connected");
      });
    }
  };
})();
