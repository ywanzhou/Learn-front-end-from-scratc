const { src, dest } = require('gulp')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')

exports.default = done => {
  // 读取流，参数是文件路径，比较强大的地方是这里可以使用通配符匹配多个文件
  src('*.css')
    // 压缩代码
    .pipe(cleanCss())
    // 修改文件类型
    .pipe(rename({ extname: '.min.css' }))
    // 输出流，参数是输出路径
    .pipe(dest('dist'))
  done()
}
