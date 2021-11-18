const Benchmark = require('benchmark')

const suite = new Benchmark.Suite()

// 添加测试
suite
  /**
   * add() 方法接受两个参数，其中第一个表示测试的名称，第二个表示测试的内容，他是一个函数
   */
  .add('join1000', () => {
    new Array(1000).join(' ')
  })
  .add('join10000', () => {
    new Array(10000).join(' ')
  })
  // 添加时间监听
  .on('cycle', event => {
    // 打印执行时间
    console.log(String(event.target))
  })
  // 完成后执行触发的事件
  .on('complete', () => {
    console.log('最快的是：' + suite.filter('fastest').map('name'))
  })
  // 执行测试
  .run({ async: true })

// 结果:
// join1000 x 146,854 ops/sec ±1.86% (88 runs sampled)
// join10000 x 16,083 ops/sec ±1.06% (92 runs sampled)
// 最快的是：join1000

/** 其中
 * 146,854 ops/sec 表示每秒执行 146,854 次，
 * ±1.86% 表示美秒执行次数上下相差 ±1.86%
 * 后面括号中的内容表示共取样多少次
 */
