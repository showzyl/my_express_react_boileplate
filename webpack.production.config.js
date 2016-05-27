var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var productionConfig = [{
  entry: {
    page1: './client/page1',
    page2: './client/page2'
  },
  output: {
    filename: './[name]/bundle.js',
    path: path.resolve('./public'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap')
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./[name]/index.css', {
      allChunks: true
    })
  ]
}];

module.exports = productionConfig;