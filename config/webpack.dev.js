const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.comon');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  
  devServer: {
    port: 8080,
    historyApiFallback: true,
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
});