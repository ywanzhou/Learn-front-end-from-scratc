const inquirer = require('inquirer')
const ora = require('ora')

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
  const spinner = ora('开始加载...').start()
  setTimeout(() => {
    console.log('\n项目名称是：' + projectName)
    spinner.succeed('加载完毕')
  }, 3000)
  // let { license } = await inquirer.prompt({
  //   // 问题的类型，list 表示可以选择
  //   type: 'list',
  //   // 答案的 key
  //   name: 'license',
  //   // 问题是什么
  //   message: 'Choose a license',
  //   // 支持选择的选项
  //   choices: ['LGPL', 'Mozilla', 'GPL', 'BSD', 'MIT', 'Apache'],
  //   // 默认值
  //   default: 'MIT',
  // })
  // console.log(projectName, license)
}
