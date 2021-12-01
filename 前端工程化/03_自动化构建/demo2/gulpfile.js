const { src, dest, parallel } = require('gulp')
// 引入 gulp-load-plugins 后直接调用
const plugins = require('gulp-load-plugins')()
// 非 gulp 插件需要单独引入
const del = require('del')
const data = {
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html',
    },
    {
      name: 'Features',
      link: 'features.html',
    },
    {
      name: 'About',
      link: 'about.html',
    },
    {
      name: 'Contact',
      link: '#',
      children: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/w_zce',
        },
        {
          name: 'About',
          link: 'https://weibo.com/zceme',
        },
        {
          name: 'divider',
        },
        {
          name: 'About',
          link: 'https://github.com/zce',
        },
      ],
    },
  ],
  pkg: require('./package.json'),
  date: new Date(),
}

// 创建style任务
const sassStyle = () => {
  // 输入scss的文件路径，并且指定根目录是src，在dist输出目录中，以src目录的结构输出
  return (
    // 匹配 src/assets/styles 下所有的 sass 文件
    src('src/assets/styles/*.scss', { base: 'src' })
      // 进行sass向css转换，并且指定的样式是完全展开
      // 如果不设置完全展开，那么默认css样式的右花括号不折行
      .pipe(plugins.sass(require('sass'))({ outputStyle: 'expanded' }))
      // 输出到dist文件夹
      .pipe(dest('dist'))
  )
}

const lessStyle = () => {
  return (
    src('src/assets/styles/*.less', { base: 'src' })
      // 进行less向css转换
      .pipe(plugins.less())
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
        plugins.babel({
          // 插件集合，最新特性的全部打包，不写这个转换没有效果
          presets: ['@babel/preset-env'],
        }),
      )
      // 输出到dist文件夹
      .pipe(dest('dist'))
  )
}

// 创建模板引擎任务
const page = () => {
  // 通配符匹配src下main的所有子目录中的html
  return src('src/**/*.html', { base: 'src' })
    .pipe(plugins.swig({ data }))
    .pipe(dest('dist'))
}

// 图片压缩任务
const image = () => {
  // 匹配images下面的所有文件
  return src('src/assets/images/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

// 图片压缩任务
const font = () => {
  // 匹配images下面的所有文件
  return src('src/assets/fonts/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}
// 将public的文件进行额外输出
const extra = () => {
  return src('public/**', { base: 'public' }).pipe(dest('dist'))
}

// 删除 dist 目录
const clean = () => {
  return del(['dist'])
}

// 创建并行任务
const style = parallel(sassStyle, lessStyle)

module.exports = {
  style,
  script,
  page,
  image,
  font,
  extra,
  clean,
}
