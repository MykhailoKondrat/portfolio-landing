// webpack v4
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
     {
        test: /\.scss$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','sass-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader'
        },
      },
      ]
  },
  plugins: [ 
    new MiniCssExtractPlugin(
      {filename: 'style.css'}
      ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new LiveReloadPlugin(),
    new CopyPlugin([
      { from: './src/img', to: './img' }
    ])
  ]
};