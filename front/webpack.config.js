const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'lib/index.js'),
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Cursos Nahual',
      template: 'lib/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /^node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback:  true
  }
}
