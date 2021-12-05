const { default: axios } = require('axios')
const { existsSync } = require('fs')
const inquirer = require('inquirer')
const ora = require('ora')
const path = require('path')
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
// const download = require('download-git-repo')

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
      console.log(error)
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
 * @description: 获取 branches 列表
 * @param {string} username 需要获取的用户名
 * @param {string} repoName 需要获取的仓库名称
 * @returns {Array} branches 列表
 */
const fetchTagList = async (username, repoName) => {
  let { data } = await axios.get(
    `https://api.github.com/repos/${username}/${repoName}/branches`,
  )
  return data.map(item => item.name)
}

const downloadGithub = async (username, repoName) => {
  const cacheDir = `${
    process.env[process.platform == 'win32' ? 'USERPROFILE' : 'HOME']
  }/.tmp`
  // 拼接一个下载后的目录
  let dest = path.join(cacheDir, repoName)
  // fs 模块提供的 existsSync 方法用于判断目录是否存在，如果存在，说明无需下载
  let flag = existsSync(dest)
  let url = `${username}/${repoName}`
  if (!flag) {
    // 需要下载 则执行下载
    await loading(download)(url, dest)
  }
  return dest
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
  // 获取所有 branches
  let branches = await loading(fetchTagList)('pacpc', repoName)

  // 如果有多个版本，用户选择多个版本，没有多个版本可以直接下载
  if (branches.length > 1) {
    // 存在
    let { checkout } = await inquirer.prompt({
      type: 'list',
      name: 'checkout',
      message: 'Choose the target version',
      choices: branches,
    })
    repoName += `#${checkout}`
  } else {
    repoName += `#${branches[0]}`
  }

  let dest = await downloadGithub('pacpc', repoName)
  // download('zcegg/create-nm', '.tmp', e => {
  // })
  // let test = promisify(download)
  // let res = await test('zcegg/create-nm', '.tmp')
  console.log(dest)
}
