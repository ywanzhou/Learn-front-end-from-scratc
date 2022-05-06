const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  devtool: "none",
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: path.resolve("dist"),
  },
  plugin: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
}
