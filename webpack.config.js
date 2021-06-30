const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/img", to: "../img" },
        { from: "src/fonts", to: "../fonts" },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  watch: true,
};