const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
    // Inform webpack that we're bulding a bundle for nodeJS, rather than for the browser
    target: "node",
    //Tell webpack the root file of our server application
    entry: "./server/index.ts",

    //Tell webpack where to put the output file that is generated
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss", ".html"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    externals: [webpackNodeExternals()],
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

            { test: /\.(scss|css)$/, loader: "ignore-loader" },
        ],
    },
};

module.exports = merge(baseConfig, config);
