const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/app-[hash].js',
        assetModuleFilename: 'assets/[contenthash][ext][query]',
  },
  module: {
    rules: [      
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|svg|jp?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[contenthash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: 'body',
      template: './public/index.html',
    }),
  ], 
}