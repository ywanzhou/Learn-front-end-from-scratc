const path = require('path')
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // 模块的匹配规则
        test: /.css$/,
        // 从后往前执行，每一项都是一个loader
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            // 小于这个值的通过url-loader，转换为DataURL，否则使用file-loader
            limit: 10 * 1024,
          },
        },
      },
    ],
  },
}
