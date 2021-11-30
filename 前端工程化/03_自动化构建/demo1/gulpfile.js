// Gulp的入口文件
const { series, parallel } = require('gulp')

const task1 = done => {
  setTimeout(() => {
    console.log('task1 working~')
    done()
  }, 1000)
}
const task2 = done => {
  setTimeout(() => {
    console.log('task2 working~')
    done()
  }, 1000)
}
const task3 = done => {
  setTimeout(() => {
    console.log('task3 working~')
    done()
  }, 1000)
}

// 创建串行任务 依次执行三个任务
exports.series = series(task1, task2, task3)
// 创建并行任务 三个任务同时执行
exports.parallel = parallel(task1, task2, task3)
