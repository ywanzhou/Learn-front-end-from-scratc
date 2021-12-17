const path = require('path')
module.exports = {
  mode: 'none',
  // 入口文件
  entry: './src/main.js',
  // 出口配置
  output: {
    // 配置出口文件名
    filename: 'index.js',
    // 文件输出目录，必须是绝对目录
    path: path.join(__dirname, 'dist'),
  },
}
