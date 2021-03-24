const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",

  devServer: {
    port: 9000,
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // output directory
  },
});
