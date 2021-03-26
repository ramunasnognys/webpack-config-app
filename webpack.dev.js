const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",

  // Control how source maps are generated
  devtool: "source-map",

  devServer: {
    port: 9000,
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // output directory
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          'postcss-loader',
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
});
