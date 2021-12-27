const path = require('path')
// 引入对应插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
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
    // 用于清空 dist 目录
    new CleanWebpackPlugin(),
    // 用于生成 index.html
    new HtmlWebpackPlugin({
      // 添加 title 属性，在 HTML 文件中通过 htmlWebpackPlugin.options.title 获取，采用 Lodash 模板语法书写
      title: 'Webpack Plugin Sample',
      // 添加一个 meta 元素，name 为 viewport content 为 width=device-width
      meta: {
        viewport: 'width=device-width',
      },
      // 使用哪个 HTML 文件作为模板
      template: 'index.html',
    }),
    // 生成多个页面 创建多个 HtmlWebpackPlugin 实例，用于生成 about.html
    new HtmlWebpackPlugin({
      // filename 默认为 index.html
      filename: 'about.html',
    }),
    // 开发环境不需要每次都拷贝静态资源，只有在打包编译上线前才会编译打包
    // new CopyWebpackPlugin([
    //   // 'public/**'
    //   // 直接拷贝 public 下所有内容至输出目录
    //   'public',
    // ]),
  ],
}
