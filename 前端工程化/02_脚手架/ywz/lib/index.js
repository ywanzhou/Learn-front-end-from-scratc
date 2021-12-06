const { default: axios } = require('axios')
const { existsSync } = require('fs')
const inquirer = require('inquirer')
const ora = require('ora')
const path = require('path')
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const { render } = require('consolidate').handlebars
const Metalsmith = require('metalsmith')
const ncp = require('ncp')
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
/**
 * @description: 下载具体仓库中的内容
 * @param {string} username 仓库拥有者的名称
 * @param {string} repoName 仓库名称 + 分支名称， # 号拼接
 * @returns {string} 下载的临时目录
 */
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

  // 如果有多个分支，用户选择多个分支，没有多个分支可以直接下载
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
  // 下载模板到临时目录
  let dest = await downloadGithub('pacpc', repoName)
  // 下载目录
  // 判断下载的模板中是否包含 question.js 如果包含则进行模板的替换，否则直接复制到目标仓库
  if (existsSync(path.join(dest, 'question.js'))) {
    await new Promise((resolve, reject) => {
      Metalsmith(__dirname)
        .source(dest)
        .destination(path.resolve(projectName))
        .use(async (files, metal, done) => {
          // files 就是需要渲染的模板目录下的所有类型的文件
          // 加载 question 文件
          const quesList = require(path.join(dest, 'question.js'))
          // 依据问题数据，定义交互问题
          let answers = await inquirer.prompt(quesList)

          // 当前 answers 保存的是用户传递的数据，我们通过 metal.metadata() 将其保存给下一个 use 中使用
          let meta = metal.metadata()
          Object.assign(meta, answers, { projectName })

          // 删除 question.js 文件，避免拷贝的用户模板
          // 可以通过 delete 关键字删除的原因是因为 files 中存在的全部都是 buffer，我们直接删除这个 key，对应的 value 也就被删除了
          delete files['question.js']
          done()
        })
        .use((files, metal, done) => {
          // 获取上一个 use 中存储的数据
          let data = metal.metadata()

          // 将 files 中的所有自有属性制作为一个数据
          let arr = Reflect.ownKeys(files)
          // 通过遍历数组，将所有的 buffer 转换为字符串，然后通过模板引擎进行替换，最后转换为 buffer 存储即可
          arr.forEach(async file => {
            // 只对 js 或者 json 文件进行替换
            if (file.includes('js') || file.includes('json')) {
              let content = files[file].contents.toString()
              // 如果包含模板引擎语法就进行替换
              if (content.includes('{{')) {
                content = await render(content, data)
                files[file].contents = Buffer.from(content)
              }
            }
          })
          done()
        })
        // 如果有异常 Promise 调用 reject
        .build(err => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        })
    })
    console.log('\n\nsuccess~')
  } else {
    // 如果不需要模板进行处理的直接拷贝至项目目录
    ncp(dest, projectName)
  }
}
