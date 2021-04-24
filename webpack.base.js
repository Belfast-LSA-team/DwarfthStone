module.exports = {
  //tell webpack to run babel on every file it run through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['env', { targets: { browsers: ['last 2 versions'] } }],
            'react',
            'stage-0',
          ],
        },
      },
    ],
  },
};
