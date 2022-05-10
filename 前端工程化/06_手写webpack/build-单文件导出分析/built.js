;(function (modules) {
  // webpackBootstrap
  // The module cache
  // 缓存被加载过的模块
  var installedModules = {}

  // The require function
  // 这个方法的作用是根据 modules 中的 key 返回模块的 exports
  function __webpack_require__(moduleId) {
    // Check if module is in cache 判断缓存中是否存在 存在则直接使用缓存中的
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports
    }
    // Create a new module (and put it into the cache)
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false, // 是否为加载 false 表示未加载
      exports: {},
    })

    // Execute the module function
    // 找到 modules 中的具体函数进行调用，执行完毕后会将该模块导出的内容挂载到 module.exports 上
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    )

    // Flag the module as loaded
    module.l = true // 修改为已经被加载

    // Return the exports of the module
    // 返回模块的 exports
    return module.exports
  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules

  // expose the module cache
  __webpack_require__.c = installedModules

  // define getter function for harmony exports
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter })
    }
  }

  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    }
    Object.defineProperty(exports, '__esModule', { value: true })
  }

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value)
    if (mode & 8) return value
    if (mode & 4 && typeof value === 'object' && value && value.__esModule)
      return value
    var ns = Object.create(null)
    __webpack_require__.r(ns)
    Object.defineProperty(ns, 'default', { enumerable: true, value: value })
    if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key]
          }.bind(null, key)
        )
    return ns
  }

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module['default']
          }
        : function getModuleExports() {
            return module
          }
    __webpack_require__.d(getter, 'a', getter)
    return getter
  }

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }

  // __webpack_public_path__ 公共访问路径
  __webpack_require__.p = ''

  // Load entry module and return exports
  return __webpack_require__((__webpack_require__.s = './src/index.js'))
})({
  // 该对象中的键为模块的id
  './src/index.js':
    /*! no static exports found */
    function (module, exports) {
      console.log('一碗周的测试代码')
      module.exports = 'index.js导出的内容'
    },
})
/**
 * 1. 打包后的文件就是一个自执行函数，调用时传递一个对象
 * 2. 传递的对象中的键是文件名与路径的拼接，值就是某个模块，它是一个函数
 * 3. 这个模块与 node.js 中的模块加载有些类似，会将被加载的模块内容包裹在一个函数中
 * 4. 这个函数在某个时间点被调用，同时会接受一定的参数，利用这些参数实现模块加载操作
 * 5. modules 这个参数最终的值就是所有模块的一个集合
 */
