const webpack = require('webpack')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      /**
       * 如果这个值是一个字符串，它会被当作一个代码片段来使用。
       * 如果这个值不是字符串，它会被转化为字符串(包括函数)。
       * 如果这个值是一个对象，它所有的 key 会被同样的方式定义。
       * 如果在一个 key 前面加了 typeof,它会被定义为 typeof 调用。
       */
      API_BASE_URL: JSON.stringify('https://api.example.com'),
    }),
  ],
}
