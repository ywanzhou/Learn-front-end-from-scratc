const { src, dest, series, parallel, watch } = require('gulp')
// 引入 gulp-load-plugins 后直接调用
const plugins = require('gulp-load-plugins')()
// 非 gulp 插件需要单独引入
const del = require('del')
// 引入热更新模块
const browserSync = require('browser-sync')
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
      // 输出到temp临时文件夹
      .pipe(dest('temp'))
      .pipe(bs.reload({ stream: true }))
  )
}

const lessStyle = () => {
  return (
    src('src/assets/styles/*.less', { base: 'src' })
      // 进行less向css转换
      .pipe(plugins.less())
      // 输出到temp临时文件夹
      .pipe(dest('temp'))
      .pipe(bs.reload({ stream: true }))
  )
}
// 创建并行任务
const style = parallel(sassStyle, lessStyle)
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
      // 输出到temp临时文件夹
      .pipe(dest('temp'))
      .pipe(bs.reload({ stream: true }))
  )
}

// 创建模板引擎任务
const page = () => {
  // 通配符匹配src下main的所有子目录中的html
  let opt = {
    // swig因为模板缓存的关系无法热更新，所以需要默认设置里面关闭缓存
    defaults: { cache: false },
    data,
  }
  return (
    src('src/**/*.html', { base: 'src' })
      .pipe(plugins.swig(opt))
      // 输出到temp临时文件夹
      .pipe(dest('temp'))
      // 以流的方式往浏览器推，每次任务执行完，都自动reload一下
      .pipe(bs.reload({ stream: true }))
  )
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

// 删除编译后的目录
const clean = () => {
  return del(['temp', 'dist'])
}
const cleanTemp = () => {
  return del(['temp'])
}

// 创建一个开发服务器
const bs = browserSync.create()
// 创建服务任务
const serve = () => {
  watch(['src/assets/styles/*.scss', 'src/assets/styles/*.less'], style)
  watch('src/assets/scripts/*.js', script)
  watch('src/**/*.html', page)
  // 开发阶段不需要每一次修改都压缩文件，这些只是修改的时候重新加载即可
  watch(['src/assets/images/**', 'src/assets/fonts/**', 'public/**'], bs.reload)

  // 进行初始化，里面可以指定一些配置
  bs.init({
    // 设置开屏右上角链接提示：false去掉
    notify: false,
    // 端口，默认3000
    port: 2080,
    // 是否会自动打开浏览器:false是关闭，默认是开启
    // open: false,
    // 启动过后监听的文件，如果文件有修改就主动刷新
    // files: 'dist/*',
    // 核心配置
    server: {
      // 网站根目录,多个的时候写成数组，如果路径找不到会依此去路径中寻找
      baseDir: ['temp', 'src', 'public'],
      // 优先于baseDir，会先匹配这个配置，没有就会去baseBir中获取，如果引用的css，js文件中有不在dist文件夹里面的，可以匹配这个。如果没有可以不用写
      routes: {
        '/node_modules': 'node_modules',
      },
    },
  })
}

const useref = () => {
  // dist当中的所有文件注释，进行打包压缩
  return (
    src('temp/*.html', { base: 'temp' })
      // 文件寻找路径依此进行查找，找到之后根据写的文件注释进行打包
      .pipe(plugins.useref({ searchPath: ['temp', '.'] }))
      // 在这里会生成html js css三种类型的文件，需要对这三种文件进行压缩操作
      .pipe(plugins.if(/\.js$/, plugins.uglify()))
      .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
      // 不加collapseWhitespace只是压缩一些空格，加上会把这行等空白字符都压缩
      .pipe(
        plugins.if(
          /\.html$/,
          plugins.htmlmin({
            collapseWhitespace: true,
            // 行内样式里面的css和js用这个参数可以进行压缩
            minifyCSS: true,
            minifyJS: true,
          }),
        ),
      )
      .pipe(dest('dist'))
  )
}

// 执行编译的组合任务
const compile = parallel(style, script, page)
// 生产环境时候的构建任务
/* - 先删除所有的文件夹
   - 下面的东西都可以并行，但是其中应该先编译sass,less,es6,template到temp临时目录，然后再压缩到dist目录
   - 图片、文字和其他的东西可以直接放到dist目录下
   - 最后删除创建的temp临时目录
*/
const build = series(
  series(clean, parallel(series(compile, useref), image, font, extra)),
  cleanTemp,
)

// 开发时候的构建任务
// 只需要编译之后发布到本地服务器上即可
const develop = series(compile, serve)

// 暴露开发和生产打包的任务命令
module.exports = {
  clean, // 删除文件可以暴露
  build,
  develop,
}
