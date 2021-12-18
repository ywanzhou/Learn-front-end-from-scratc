const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /.md$/,
        // 除了使用文件名，也可以使用路径的方式引入 loader
        use: ['html-loader', './markdown-loader'],
      },
    ],
  },
}
