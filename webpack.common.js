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
  output: {
   assetModuleFilename: 'images/[hash][ext][query]'
  },

  module: {
    rules: [
      // Images
      {
        test: /\.(?:ico|svg|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        
      },
    ],
  },

};
