const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    // 对象中的每一个属性表示一个入口，属性名表示文件名称
    index: './src/index.js',
    album: './src/album.js',
  },
  output: {
    // [name] 表示 entry 中的属性名称，这里的输出结果最终为两个文件
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      // 自动提取所有公共模块到单独 bundle
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/index.html',
      filename: 'index.html',
      // 值为 entry 中的属性名称
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/album.html',
      filename: 'album.html',
      chunks: ['album'],
    }),
  ],
}
