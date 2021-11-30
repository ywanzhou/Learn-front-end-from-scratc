const { src, dest, parallel } = require('gulp')
// 引入sass模块
const sass = require('gulp-sass')(require('sass'))
// 引入less模块
const less = require('gulp-less')
// 引入babel
const babel = require('gulp-babel')

// 创建style任务
const sassStyle = () => {
  // 输入scss的文件路径，并且指定根目录是src，在dist输出目录中，以src目录的结构输出
  return (
    // 匹配 src/assets/styles 下所有的 sass 文件
    src('src/assets/styles/*.scss', { base: 'src' })
      // 进行sass向css转换，并且指定的样式是完全展开
      // (如果不设置完全展开，那么默认css样式的右花括号不折行)
      .pipe(sass({ outputStyle: 'expanded' }))
      // 输出到dist文件夹
      .pipe(dest('dist'))
  )
}

const lessStyle = () => {
  return (
    src('src/assets/styles/*.less', { base: 'src' })
      // 进行less向css转换
      .pipe(less())
      // 输出到dist文件夹
      .pipe(dest('dist'))
  )
}
// 创建babel任务
const script = () => {
  return (
    src('src/assets/scripts/*.js', { base: 'src' })
      // 使用babel转换ES6语法
      .pipe(
        babel({
          // 插件集合，最新特性的全部打包，不写这个转换没有效果
          presets: ['@babel/preset-env'],
        }),
      )
      // 输出到dist文件夹
      .pipe(dest('dist'))
  )
}

// 创建并行任务
const style = parallel(sassStyle, lessStyle)

module.exports = {
  style,
  script,
}
