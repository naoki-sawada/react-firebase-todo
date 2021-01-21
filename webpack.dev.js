const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const outputFolder = 'dist';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, outputFolder),
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    host: '0.0.0.0',
    port: 10080,
  },
});
