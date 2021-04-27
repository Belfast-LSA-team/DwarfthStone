const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

const config = {
    //Tell webpack the root file of our server application
    entry: "./client/src/index.ts",

    //Tell webpack where to put the output file that is generated

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss", ".html"],
    },
    //tell webpack to run babel on every file it run through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["env", { targets: { browsers: ["last 2 versions"] } }],
                        "react",
                        "stage-0",
                    ],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./client/public/index.html",
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            swDest: "serviceWorker.js",
            navigateFallback: "index.html",
        }),
    ],
};

module.exports = merge(baseConfig, config);
