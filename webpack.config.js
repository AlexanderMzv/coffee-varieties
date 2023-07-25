const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const sveltePreprocess = require("svelte-preprocess");
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

const paths = {
  entry: path.resolve(__dirname, "src", "main.ts"),
  dist: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
  favicon: path.resolve(__dirname, "public", "favicon.ico"),
  svelte: path.resolve("node_modules", "svelte/src/runtime"),
};

module.exports = {
  entry: { "build/bundle": paths.entry },
  output: {
    path: paths.dist,
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    alias: {
      svelte: paths.svelte,
    },
    extensions: [".mjs", ".js", ".ts", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
    conditionNames: ["svelte", "browser"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              dev: !prod,
            },
            emitCss: prod,
            hotReload: !prod,
            preprocess: sveltePreprocess({ sourceMap: !prod }),
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "[name].[hash].[ext]",
        },
      },
      {
        test: /\.(svg|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
        },
      },
    ],
  },
  optimization: {
    minimize: prod,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  mode,
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ESLintPlugin(),
  ],
  devtool: prod ? false : "source-map",
  devServer: {
    hot: true,
  },
};
