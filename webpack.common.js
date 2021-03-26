const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js", // bundle's entry point
    vendor: "./src/vendor.js", // bootstrap, reset.css etc..
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      inject: "body",
    }),
  ],

  module: {
    rules: [
      // Babel | JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // Images
      {
        test: /\.(?:ico|svg|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
