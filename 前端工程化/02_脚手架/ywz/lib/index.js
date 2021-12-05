const inquirer = require('inquirer')

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
  let { license } = await inquirer.prompt({
    // 问题的类型，list 表示可以选择
    type: 'list',
    // 答案的 key
    name: 'license',
    // 问题是什么
    message: 'Choose a license',
    // 支持选择的选项
    choices: ['LGPL', 'Mozilla', 'GPL', 'BSD', 'MIT', 'Apache'],
    // 默认值
    default: 'MIT',
  })
  console.log(projectName, license)
}
