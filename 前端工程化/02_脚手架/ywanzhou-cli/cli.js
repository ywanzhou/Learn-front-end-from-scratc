#!/usr/bin/env node

const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

/**
 * inquirer.prompt() 方法用于发起命令行交互，该方法接收一个数组，数组中的每一个对象就是一个问题，
 * 该方法返回一个 Promise
 */
inquirer
  .prompt([
    {
      // type 表示交互方式
      type: 'input',
      // name 表示获取后的那个 key
      name: 'name',
      // message 表示提示命令行提示信息
      message: '项目名称?',
    },
  ])
  .then(answer => {
    // answer 表示用户输入的信息
    // 模板目录
    const tempDir = path.join(__dirname, 'templates')
    // 目标目录
    const destDir = process.cwd()
    // 将模板目录下素有文件通过模板引擎转换后赋值的目标目录中
    fs.readdir(tempDir, (err, files) => {
      if (err) throw err
      // 遍历所有模板文件
      files.forEach(file => {
        // 通过 ejs 渲file染文件
        ejs.renderFile(path.join(tempDir, file), answer, (err, result) => {
          if (err) throw err
          // 将 ejs 渲染后的文件写入目标文件中
          fs.writeFileSync(path.join(destDir, file), result)
        })
      })
    })
  })
  .catch(error => {
    if (error.isTtyError) {
      // 提示符无法在当前环境中呈现
    } else {
      // 一些其他错误
    }
  })
