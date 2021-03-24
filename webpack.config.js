const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 9000,
  },

  entry: "./src/index.js", // bundle's entry point
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"), // output directory
  },

  module: {
    rules: [
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      // template: "index.html",
      template: "./src/template.html",
      inject: "body",
    }),
  ],
};
