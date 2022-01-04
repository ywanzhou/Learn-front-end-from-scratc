const path = require('path')
// 引入对应插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 2. 引用 webpack 提供的 HMR插件
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  mode: 'none',
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    // 1. 将 devServer.hot 设置为 true
    hot: true,
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024, // 10 KB
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      meta: {
        viewport: 'width=device-width',
      },
      template: 'index.html',
    }),
    // new CopyWebpackPlugin([
    //   'public',
    // ]),
    // 使用 HMR 插件
    new HotModuleReplacementPlugin(),
  ],
}
