;(function (modules) {
  // 用于缓存已经加载的模块
  var installedModules = {}

  // 一个加载方法，核心功能返回模块中导出的内容
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports
    }
    // Create a new module (and put it into the cache)
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    })

    // Execute the module function
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    )

    // Flag the module as loaded
    module.l = true

    // Return the exports of the module
    return module.exports
  }

  // 将所有模块引用保存到 __webpack_require__.m
  __webpack_require__.m = modules

  // 保存一下缓存
  __webpack_require__.c = installedModules

  // define getter function for harmony exports
  // 为某个对象增加某个属性，并增加一个 getter 访问器
  __webpack_require__.d = function (exports, name, getter) {
    // 判断 exports 是否具有 name 属性，如果不具有，条件成立，进入 if 语句
    if (!__webpack_require__.o(exports, name)) {
      // 为 exports 增加一个 name 的属性，是可枚举的 以及 getter 时触发的方法
      Object.defineProperty(exports, name, { enumerable: true, get: getter })
    }
  }

  // define __esModule on exports
  // 为 exports 增加一个标记，用于标记是否为 ESModule 模块
  __webpack_require__.r = function (exports) {
    // 下面条件如果成立，说明是 ESModule
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      // Object.prototype.toString.call(exports) -> Module
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    }
    // 为 exports 增加一个 __esModule 属性，将其值设置为 true
    Object.defineProperty(exports, '__esModule', { value: true })
  }

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function (value, mode) {
    // 1. 调用 t 方法之后，会拿到被加载模块中的 value
    // 2. 对于 value 来说我们可能直接返回，也有可能处理之后在返回
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
    // 判断 module && module.__esModule 返回 module 还是 module['default']
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module['default']
          }
        : function getModuleExports() {
            return module
          }
    // 判断 a 是否存在，如果不存在增加一个getter，并返回
    __webpack_require__.d(getter, 'a', getter)
    return getter
  }

  // Object.prototype.hasOwnProperty.call
  // 判断 object 是否具有 property 属性
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }

  // __webpack_public_path__ public_path
  __webpack_require__.p = ''

  // Load entry module and return exports
  return __webpack_require__(
    (__webpack_require__.s /* s用于缓存主入口 */ = './src/index.js')
  )
})({
  './src/index.js': function (module, exports, __webpack_require__) {
    const name = __webpack_require__(/*! ./user.js */ './src/user.js')
    console.log(name)
    console.log('这个是index.js')
  },

  './src/user.js': function (module, exports) {
    module.exports = '一碗周'
  },
})
