import * as mongoose from "mongoose";

const { MONGO_URI } = process.env;
export default (function() {
  const db = mongoose.connection;

  return {
    // 연결
    connect() {
      console.log("start to connect db server");
      mongoose.connect(String(MONGO_URI!), {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      db.on("error", console.error.bind(console, "connection error:"));
      db.once("open", function() {
        // we're connected!
        console.log("db server connected");
      });
    }
  };
})();
