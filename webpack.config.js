const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 9000,
  },

  entry: "./src/index.js", // bundle's entry point
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"), // output directory
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
      // Images
      {
        test: /\.(?:ico|svg|gif|png|jpg|jpeg)$/i,
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
