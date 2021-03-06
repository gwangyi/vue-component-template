const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js",
    libraryTarget: "umd"
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }, {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'vue-loader'],
    }],
  },
};
