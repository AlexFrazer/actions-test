import * as path from "path";
import { Configuration } from "webpack";
import HTMLPlugin from "html-webpack-plugin";

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
    alias: {
      react: require.resolve("react"),
      "react-dom": require.resolve("react-dom"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};

export default config;
