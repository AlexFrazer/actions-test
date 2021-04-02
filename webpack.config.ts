import * as path from "path";
import { Configuration } from "webpack";
import HTMLPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

const srcPath = path.resolve(path.join(__dirname, "src"));
const distPath = path.resolve(path.join(__dirname, "dist"));

const config: Configuration = {
  mode: isProduction ? "production" : "development",
  entry: srcPath,
  output: {
    path: distPath,
    filename: isProduction ? "[name].[chunkhash].js" : "[name].js",
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
  optimization: {
    minimize: isProduction,
    minimizer: [
      // eslint-disable-next-line
      // @ts-ignore
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};

export default config;
