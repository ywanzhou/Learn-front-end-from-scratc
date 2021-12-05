const inquirer = require('inquirer')
const ora = require('ora')

/**
 * @description: 为一个Promise函数添加一个loading效果
 * @param {Function} callback 返回Promise且需要被loading修饰的函数
 * @returns {Function} 被修饰后的方法
 */
const loading = callback => {
  return async (...args) => {
    // 开始
    let spinner = ora('start...').start()
    try {
      // 没有异常即成功
      let res = await callback(...args)
      spinner.succeed('success')
      return res
    } catch (error) {
      spinner.fail('fail')
      return error
    }
  }
}

module.exports = async name => {
  let { projectName } = await inquirer.prompt({
    // 问题的类型，input 表示输入
    type: 'input',
    // 答案的 key
    name: 'projectName',
    // 问题是什么
    message: 'The project name is it?',
    // 默认值
    default: name,
  })
  let res = await loading(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(200)
      }, 3000)
    })
  })()
}
