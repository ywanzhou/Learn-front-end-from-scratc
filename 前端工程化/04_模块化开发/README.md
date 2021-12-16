# 模块化

## 写在前面

随着前端项目的不断复杂，代码日益膨胀，项目的维护难度随之越来越大，此时模块化也就相继的出现了，本篇文章将会介绍如下内容：

- 模块化的概念以及演变过程
- 模块化规范
	- CommonJS
	- AMD
	- CMD
	- ES module

## 模块化的概念以及演变过程

### 什么是模块化

模块化就是将一个复杂的程序依据一定的规则或者说是规范，将其封装成几个单独的块（这里的块指的就是文件），在使用的时候将其组合在一起。

块内部的数据是私有的，只是向外部暴露一些接口或者说是一些方法，让其与其他模块进行通信。

### 模块化的演变过程

早期的前端技术标准根本没有预料到前端会有现在一个规模，所以说很多设计上遗留的问题就导致了现在去实现前端模块化的时候会遇到很多的困难。

虽然说模块化现在已经被一些标准或者工具去解决了，但是它的一个演变过程还是值得我们去思考的。

模块化演变的过程其实就是前端领域的实践过程，这个过程大致可以分为四个阶段：

#### 文件划分方式

文件划分方式是最原始的模块系统，具体做法就是将一个功能以及它相关的一些状态单独存在不同的文件中，每一个文件就代表一个模块。使用这个模块就是将这个模块文件引入页面文件中，一个`<script>`标签对应一个模块。如下代码展示：

```HTML
<body>
  <!-- 登录模块 -->
  <script src="login.js"></script>
  <!-- 用户模块 -->
  <script src="user.js"></script>
</body>
```


使用这种方式的缺点很明显，如下：

- 模块内部的成员都处在全局作用域中，任意位置都可以进行访问和修改，这样就造成了污染全局作用域。
- 命名容易冲突。
- 没有办法很好的管理模块间的依赖关系

#### 命名空间方式

命名空间方式就是在第一个阶段的基础上约定每一个模块只暴露一个全局对象，所有模块的成员都挂载到这个对象的下面。

示例代码如下：

`component/module_a.js`

```JavaScript
let moduleA = {
  name: '一碗周',
  handle() {
    console.log(this.name)
  },
}

```


`component/module_b.js`

```JavaScript
let moduleB = {
  name: '一碗粥',
  handle() {
    console.log(this.name)
  },
}

```


`index.html`

```html
<body>
  <script src="./component/module_a.js"></script>
  <script src="./component/module_b.js"></script>
  <script>
    console.log(moduleA.name);
    console.log(moduleB.name);
    moduleA.handle()
    moduleB.handle()
  </script>
</body>
```


通过这种方式减少了命名冲突的可能，但是仍然没有私有空间，且模块之间的依赖关系还是没有进行解决。

#### IIFE模式

所谓的IIFE模式就是使用立即执行函数去创建闭包，这种方式为模块提供了私有空间。

具体的做法就是将模块中每一个成员都放在一个函数提供的私有作用域当中，对于需要暴露给外部的成员可以通过挂载到全局对象上的方式去实现。这种方式实现了私有成员的概念，就是说模块的私有成员只能在模块内部通过闭包的方式去访问而在外部，是没有办法去使用使用的这样就确保了私有成员的安全。

示例代码如下：

`component/module_a.js`

```JavaScript
;(function () {
  let name = '一碗周'
  function handle() {
    console.log(name)
  }
  window.moduleA = { handle }
})()


```


`component/module_b.js`

```JavaScript
;(function () {
  let name = '一碗粥'
  function handle() {
    console.log(name)
  }
  window.moduleB = { handle }
})()

```


`index.html`

```html
<body>
  <script src="./component/module_a.js"></script>
  <script src="./component/module_b.js"></script>
  <script>
    console.log(moduleA.name) // undefined
    console.log(moduleB.name) // undefined
    moduleA.handle()
    moduleB.handle()
  </script>
</body>

```


发展到这个阶段，就已经实现了私有成员的概念了，但是模块间的依赖关系还是没有解决。

#### IIFE依赖参数

我们通过为立即执行函数添加参数的形式可以实现模块间的依赖，示例代码如下：

`component/module_a.js`

```JavaScript
;(function () {
  function printName(name) {
    console.log(name)
  }
  // 暴露一个打印的方法
  window.moduleA = { printName }
})()

```


`component/module_b.js`

```JavaScript
;(function (m) /* 形参 */ {
  let name = '一碗周'
  function sayName() {
    // 使用其他模块的成员
    m.printName(name)
  }
  window.moduleB = { sayName }
})(moduleA) // 实参


```


`index.html`

```html
<body>
  <script src="./component/module_a.js"></script>
  <script src="./component/module_b.js"></script>
  <script>
    moduleB.sayName() // 一碗周
  </script>
</body>

```


以上4个阶段就是早期开发者在没有工具和规范的情况下，对模块下进行的落地方式。

但是这种方式还是存在问题的，如下：

- 引入多个`<script>`标签，就需要发送多个请求，请求数量太多
- 依赖模糊，很难说清每一个模块之间的依赖
- 难以维护

接下来我们来介绍一下现在开发过程中使用的模块化规范。

## CommonJS

CommonJS在Node.js中广泛应该，Node.js是CommonJS的实践者。CommonJS规范指出一个单独的文件就是一个模块，它采用的是同步加载模块，也就是说模块加载的顺序就是代码中编写的顺序是一致的，而加载的文件资源大多数都存储在服务器中，所以说加载速度没有什么问题。但是这种方案不适用与浏览器端，由于网络原因，更合理的方案是采用异步加载（CMD、AMD和ESmodule）。

### 基本语法

暴露模块使用`module.exports`，或者直接使用`exports`，引入模块直接使用`require()`方法，示例代码如下：

`component/module_c.js`

```JavaScript
let name = '一碗周'
module.exports = {
  name,
  getName() {
    return name
  },
  setName(n) {
    name = n
  },
}

```


`index.js`

```JavaScript
// 引入自定义的模块
const person = require('./component/module_c')
// 引入 Node.js 提供的模块
const fs = require('fs')

console.log(person.getName()) // 一碗周
person.setName('一碗粥')
console.log(person.name) // 一碗周

console.log(person.getName()) // 一碗粥

```


### 模块加载机制

我们现在来讲解一下上面代码，讲解上面代码的过程中就了解的CommonJS的模块加载机智。

首先通过`module.exports`导出一个对象，该对象中包含一个属性两个方法，我们在`index.js`中引入该模块，通过`require()`方法引入模块并定义一个变量来接收这个模块。CommonJS的模块加载机制是**被输出值得拷贝** ，也就是说一旦输出了某个值，即使模块内的数据变化，也不会影响这个值了。

我们上面的代码中通过`setName()`重新为`name`进行赋值，在赋值后拿到的结果还是初始值，这是因为`name`是一个原始类型的值，它的值会被缓存。

当我们通过`getName()方法`来方法`name`的值才可以获取到没有缓存的那个结果。

## AMD

AMD是"*Asynchronous Module Definition* "的缩写。它与CommonJS不同，它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

AMD规范的最佳实践者是[require.js](https://requirejs.org/)，现在我们来看一下[require.js](https://requirejs.org/)怎么用。

首选我们通过`define()`方法定义模块，该方法接受一个函数，该函数的返回值作为暴露给外部的接口。然后通过`requirejs()`方法引入具体模块，通过回调函数的方式来调用具体内容。示例代码如下：

`component/module_d.js`

```JavaScript
// 通过 define() 方法定义
define(() => {
  let name = '一碗周'
  console.log('this is module')
  return {
    name,
    getName() {
      return name
    },
    setName(n) {
      name = n
    },
  }
})

```


`index.html`

```JavaScript
<body>
  <!-- 借助CDN引入requirejs -->
  <script
          src="https://cdn.bootcdn.net/ajax/libs/require.js/2.3.6/require.min.js"></script>
  <script>
    // 通过 requirejs 提供了 requirejs() 方法使用定义的模块，该方法接受两个参数
    // - 第一个参数接收一个数组，数组中的每一项是一个路径，表示模块地址
    // - 第二个参数接收一个回调函数，回调函数中的参数表示具体的模块
    requirejs(['./component/module_d.js'], (person) => {
      console.log(person.name) // requirejs
    })

  </script>
</body>

```


## CMD

CMD规范是在[sea.js](https://seajs.github.io/seajs/docs/)推广中形成的，与AMD类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。

目前CMD已经不再用了，这里就不在介绍了。

## ES Module

### 概述

在ES6之前， JavaScript一直没有一个官方提供的模块化的体系，所使用的都是社区所提供的，例如CommonJS和AMD等。但是在ES6的时候，ECMA提出了ESmodule规范，即原生的模块化体系。但是原生提供的模块化体系的兼容性并不是很好，下图展示了ESModule的浏览器兼容性

![](image/01_ESmodule%E5%85%BC%E5%AE%B9%E6%80%A7.png)

从上图中我们可以看到，IE浏览器完全不支持（虽然现在IE几乎已经死掉了），随着时间的推移，想Webpack这种打包工具的流行，慢慢的，ESmodule就进入大家的视野了。

### 语法特性

如果想要在HTML中使用使用ES Module的话，需要为`<script>`标签添加一个`type="module"`的属性，然后就可以执行其中的JS代码。

ES Module有主要以下几个特性：

- 自动全部采用严格模式，自动忽略`'use strict'`
- 每个ES Module都会运行的单独的私有作用域中
- ES Module是通过CORS的方式请求外部JavaScript模块的
- ES Module的`<script>`标签会自动延迟执行脚本，相当于加了`defer`属性，网页对默认的`<script>`标签采用的是立即执行的机制，页面的渲染会等待这个脚本执行完成才会往下渲染

### 导入和导出

导出成员可以通过`export`导出具体成员，也可以通过`export default`导出默认成员，示例代码如下：

`component/module_e.js`

```JavaScript
// 导出单个成员
export let name = '一碗周'
// 导出默认成功
export default function sayMe() {
  console.log('一碗周')
}
// 批量导出成员
// export { name, sayMe }

```


值得注意的是，批量导出成员的写法并不是导出一个对象，而是固定的语法，导出多个成员必须使用花括号包裹，如果想要导出对象，可以使用默认语法，示例代码如下：

```JavaScript
export default { name, sayMe }

```


使用ES Module导出成员，导出的是**值得引用** ，也就是说如果模块内部的成员发生改变，所有引用该模块的地方都会发生改变。

我们也可以对导出成员通过`as`关键字进行重命名，示例代码：

```JavaScript
export { name as e_name, sayMe as e_sayMe }
```


导入成员使用`import`关键字导入，如下代码展示了如何导入一个ES Module模块，示例示例代码如下：

```JavaScript
// 导入默认成员
// import sayMe from './component/module_e.js'
// 或者通过 as 关键字对导入的默认成员进行重命名
// import { default as sayMe } from './component/module_e.js'
// 导入指定成员
// import { name } from './component/module_e.js'

// 也可以将上面两行合并为1行，示例代码如下：
// import { default as sayMe, name } from './component/module_e.js'
// 或者简写如下：
import sayMe, { name } from './component/module_e.js'

sayMe()
console.log(name)

```


值得注意的是，我们无法修改导入的成员的值，如果修改则会抛出异常示例代码如下：

```JavaScript
import sayMe, { name } from './component/module_e.js'

name = '1'

```


异常信息为`Uncaught TypeError: Assignment to constant variable.`

如果我们只想要执行某个模块，并不需要模块内部的成员，可以直接通过`import`关键字引入即可。

如果我们想要动态的引入某个成员，可以将`import()`当做一个函数来使用，示例代码如下：

```JavaScript
import('./module.js').then(res=>{
  // res 表示模块的默认导出成员
})
```


我们可以将导入的模块直接导出，示例代码如下：

```JavaScript
export { name } from './module.js'
```


### 在Node.js中使用ES Module

如果我们想要在Node.js中使用ES Module，需要将后缀名改为`.mjs`，然后就可以支持ES Module模块了，或者说是通过在项目的`package.json`文件中，指定`type`字段为`module`。修改完成之后我们可以使用ES Module在Node.js项目中加载模块了，示例代码如下：

```JavaScript
// 导入自定义的成员
import { foo, bar } from './module.js'
console.log(foo, bar)

// 通过 ES Module 导入内置模块
import fs from 'fs'
fs.writeFileSync('./test.txt', '一碗周')
// 导入模块内的成员
import { writeFileSync } from 'fs'
writeFileSync('./text.txt', '一碗周')
// 导入第三方模块
import _ from 'lodash'
_.camelCase('ES Module')

// 有些第三方模块不支持内部成员的导入，因为模块直接导出默认成员
// import { camelCase } from 'lodash'
// console.log(camelCase('ES Module'))

```


#### CommonJS的差异

如果在Node中使用ES Module，是不能使用`require`，`module`，`exports`，`__filename`，`__dirname`，其实这五个成员其实是 CommonJS把模块包装成一个函数，然后通过参数提供过来的成员，并不是真正的全局对象，如果想要使用的话，需要自己进行封装，示例代码如下：

```JavaScript
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
```


## 写在最后

本篇文章介绍了前端模块化的发展过程，以及常用的模块化规范。但是这么多模块规范，有的已经成为了历史，在浏览器端以及全部采用ES Module，而服务端现在用的比较多的还是CommonJS，但是在服务端可是可以使用ES Module。

也就是说模块化已经成为了前端开发者的必备技能了。

