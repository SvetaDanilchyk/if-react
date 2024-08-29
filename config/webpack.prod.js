const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.comon');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  module: {
    rules: [       
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
    ]
});
