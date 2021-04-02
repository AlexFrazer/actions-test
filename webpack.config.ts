import * as path from "path";
import { Configuration } from "webpack";
import HTMLPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const srcPath = path.resolve(path.join(__dirname, "src"));
const distPath = path.resolve(path.join(__dirname, "dist"));

const config: Configuration = {
  entry: srcPath,
  output: {
    path: distPath,
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".mjs"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};

export default config;
