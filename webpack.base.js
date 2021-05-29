module.exports = {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    //tell webpack to run babel on every file it run through
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};
