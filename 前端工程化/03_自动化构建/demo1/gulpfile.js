// Gulp的入口文件
const delay = time => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}
exports.default = async () => {
  await delay(1000)
  console.log('async task~')
}
