const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // bundle's entry point
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"), // output directory
  },

  plugins: [
    new HtmlWebpackPlugin({
      // template: "index.html",
      template: "./src/template.html",
      inject: "body",
    }),
  ],
};
