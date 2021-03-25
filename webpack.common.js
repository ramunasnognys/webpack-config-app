const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js", // bundle's entry point
    vendor: "./src/vendor.js", // bootstrap, reset.css etc..
  },

  plugins: [
    new HtmlWebpackPlugin({
      // template: "index.html",
      template: "./src/template.html",
      inject: "body",
    }),
  ],

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
};
