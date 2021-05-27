const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

const config = {
    //Tell webpack the root file of our server application
    entry: "./client/src/index.tsx",

    //Tell webpack where to put the output file that is generated

    output: {
        path: path.join(__dirname, "public"),
        publicPath: "/",
        filename: "bundle.js",
    },
    // output: {
    //     filename: "bundle.js",
    //     path: path.resolve(__dirname, "public"),
    // },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss", ".html"],
    },
    //tell webpack to run babel on every file it run through

    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|ogg|mp3|wav)$/,
                exclude: /node_modules/,
                use: ["file-loader?name=assets/[name].[ext]"],
            },
            {
                test: /\.(woff2|woff|ttf|eot)$/,
                use: ["file-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },

    plugins: [
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            swDest: "serviceWorker.js",
            navigateFallback: "index.html",
        }),
    ],
};

module.exports = merge(baseConfig, config);
