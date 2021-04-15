const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./client/src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    resolve: {
        alias: {
            app: path.join("client", "app"),
            entities: path.join("client", "entities"),
            src: path.join("client", "src"),
        },
        extensions: [".tsx", ".ts", ".js", ".css", ".scss", ".html"],
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        compress: true,
        port: 3010,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
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
        new HtmlWebpackPlugin({
            template: "./client/public/index.html",
        }),
    ],
};
