;(function (modules) {
  // 1 定义缓存对象
  const installedModules = {}

  // 2 定义加载方法
  function __webpack_require__(moduleId) {
    // 2.1 在缓存中读取，如果存在直接返回
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports
    }

    // 2.2 定义 module 对象，并存在缓存中一份
    const module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    })

    // 2.3 调用模块
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    )

    // 2.4 修改模块标志
    module.l = true

    // 2.5 返回模块的内容
    return module.exports
  }

  // 3 定义 o 方法，用于判断指定对象中是否存在指定属性
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }

  // 4 定义 d 方法，用于为指定属性增加 getter 访问器
  __webpack_require__.d = function (exports, name, getter) {
    // 4.1 调用 o 方法，判断是否已经存在该属性，不存在时进行添加
    if (!__webpack_require__.o(exports, name)) {
      // 4.2 增加属性以及 getter
      Object.defineProperty(exports, name, { enumerable: true, get: getter })
    }
  }

  // 5 定义 r 方法，用于为 exports 增加一个标记，标记为该模块使用的是 ESM 规范
  __webpack_require__.r = function (exports) {
    // 5.1 判断当前执行环境是否是 ES6，如果是增加指定属性
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    }
    // 5.2 为 exports 增加 __esModule 属性，将值设置为 true
    Object.defineProperty(exports, '__esModule', { value: true })
  }

  // 6. 定义 n 方法，用于兼容默认导出与普通导出
  __webpack_require__.n = function (module) {
    // 6.1 根据条件来判断是否是默认导出
    const getter =
      module && module.__esModule
        ? function getDefault() {
            return module['default']
          }
        : function getModuleExports() {
            return module
          }
    // 6.2 通过 a 属性来访问 module 中的值
    __webpack_require__.d(getter, 'a', getter)
    return getter
  }

  // 7 调用加载方法，传递主模块 id 作为参数
  return __webpack_require__((__webpack_require__.s = './src/index.js'))
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
