const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // bundle's entry point
  output: {
    path: path.resolve(__dirname, "dist"), // output directory
    filename: "[name].js", // name of the generated bundle
  },
};
