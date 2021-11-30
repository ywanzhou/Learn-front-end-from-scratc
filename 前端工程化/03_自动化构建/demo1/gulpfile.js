// Gulp的入口文件
exports.default = () => {
  console.log('promise task~')
  if (true) {
    // 这里通过promise的resolve方法返回一个成功的promise
    // 一旦resolve了，那么任务就结束了
    // resolve里面不需要传参数，因为gulp会忽略这个值
    return Promise.resolve()
  } else {
    // 通过reject去触发一个异常
    return Promise.reject(new Error('promise failed~'))
  }
}
