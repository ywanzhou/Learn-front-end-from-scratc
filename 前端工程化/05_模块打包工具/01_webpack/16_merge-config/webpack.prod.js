const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common')
// 通过 merge 进行配置的合并
module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new CopyWebpackPlugin(['public'])],
})
