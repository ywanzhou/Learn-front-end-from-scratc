const { default: axios } = require('axios')
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
/**
 * @description: 获取仓库列表
 * @param {string} username 被获取的用户名
 * @returns {Array} 仓库列表
 */
const fetchRepoList = async username => {
  let { data } = await axios.get(
    `https://api.github.com/users/${username}/repos`,
  )
  return data.map(item => item.name)
}

/**
 * @description: 获取 tags 列表
 * @param {string} username 需要获取的用户名
 * @param {string} repoName 需要获取的仓库名称
 * @returns {Array} tags 列表
 */
const fetchTagList = async (username, repoName) => {
  let { data } = await axios.get(
    `https://api.github.com/repos/${username}/${repoName}/tags`,
  )
  return data.map(item => item.name)
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
  // 获取仓库列表
  let repos = await loading(fetchRepoList)('pacpc')
  // 选择仓库列表
  let { repoName } = await inquirer.prompt({
    type: 'list',
    name: 'repoName',
    message: 'Choose a template',
    choices: repos,
  })
  // 获取所有 tags
  let tags = await loading(fetchTagList)('pacpc', repoName)

  // 如果有多个版本，用户选择多个版本，没有多个版本可以直接下载
  if (tags.length) {
    // 存在
    let { tagVersion } = await inquirer.prompt({
      type: 'list',
      name: 'tagVersion',
      message: 'Choose the target version',
      choices: tags,
    })
    repoName += `#${tagVersion}`
  }
  console.log(projectName, repoName)
}
