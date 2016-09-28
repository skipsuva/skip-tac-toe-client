var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
        query: {presets: ['es2015', 'react']}
      },
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']}
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig]
};
