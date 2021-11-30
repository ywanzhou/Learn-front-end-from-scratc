// Gulp的入口文件
exports.error = done => {
  console.log('error task~')
  done(new Error('task failed~'))
}
