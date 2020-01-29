const path = require("path");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    // -----
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  }
};
