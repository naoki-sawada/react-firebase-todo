const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ConfigWebpackPlugin = require("config-webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputFolder = "dist";

module.exports = {
  entry: path.join(__dirname, "src/ts/app.tsx"),
  output: {
    path: path.join(__dirname, outputFolder),
    publicPath: "/",
    filename: "js/bundle.js",
    chunkFilename: "js/[name].bundle.js",
  },
  resolve: {
    modules: [path.join(__dirname, "src/ts"), "node_modules"],
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /(\.tsx$|\.ts$)/,
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "src/css", to: "css" }],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true,
    }),
    new ConfigWebpackPlugin(),
  ],
};
