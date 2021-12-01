let path = require('path')
let fs = require('fs')
let marked = require('marked')
let puppeteer = require('puppeteer')

module.exports = async (filename, {output, width = 800}) => {

  // 1 将业我们就按路径找到 filename 对应的 md 文件，
  // 2 读取它里面的内容然后转为 html 结构
  // 3 将html想办法处理成图片输出到 output 对应的路径，同时将宽度设置为用户传入的 width 
  // console.log(filename, output, width)

  // 1 依据传入的文件名称拼接出具体的md文件路径
  // 1.1 传入的是md的文件名，我们需要的当前文件所在的绝对路径 cwd() --》 path.join resolve
  // console.log(process.cwd())
  // console.log(path.join(process.cwd(), filename))  // 前后二个参数的拼接
  // console.log(path.resolve(filename))  // 如果只传入一个参数，那么会自动的将它处理为绝对路径【默认在前面补上 cwd 】

  // 1.2.1 判断当前 filanem 对应的内容是否真实存在，如果存在还要判断是否为是一个 md 文件
  let abspath = path.resolve(filename)
  // console.log(fs.existsSync(abspath))  // 当前方法接收一个路径返回布尔值，如果目标文件存在那么就会返回 true 
  if (!fs.existsSync(abspath)) {
    // 说明文件是不存在的
    throw new Error('filename对应的文件是不存在的')
  }
  // 1.2.2 如果当前路径对应的目标存在那么直接判断是否为一个文件（）  statSync 接收一个文件路径返回一个对象，这个对象就涵盖了当前目标的所有信息
  let stat = fs.statSync(abspath)
  if (stat.isDirectory()) {
    // 此条件成立时说明 filename 是存在的，但是 filename 不是一个文件名称，而是一个文件夹名称
    throw new Error('给定路径是一个文件夹')
  }

  // 1.3 读取绝对路径文件所对应的文件内容  ===> 
  let contents = fs.readFileSync(abspath, 'utf-8')

  // 2 将读取出来的 md 格式内容处理为 html 结构 
  // ret 是一个 html 标签结构 
  let ret = marked(contents)
  const temp = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      h1{
        font-size: 5em;
      }
    </style>
    <link rel="stylesheet" href="" />
  </head>
  <body>
    ${ret}
  </body>
  </html>`

  let html = temp.replace('${ret}', ret)
  console.log(html)

  // 3 将html展示内容处理为图片，然后输出 （无头浏览器） puppeteer 
  const browser = await puppeteer.launch()  // 启动一个浏览器
  const page = await browser.newPage()  // 创建一个界面
  await page.setContent(ret)  // 在界面中加载内容
  await page.screenshot({path: 'example.png'})
 
  await browser.close()

  // github-markdown-css
}
