# 入门

## 写在前面

TypeScript是JavaScript的超集，它可以编译成纯JavaScript代码。

那为什么会出现TypeScript这门语言，主要是因为现在的JavaScript可以开发很多复杂的项目，但是JavaScript又缺乏其可靠性，在使用的时候需要我们为了代码的健壮性需要添加很多业务逻辑去判断。

TypeScript可以运行在浏览器环境、Node.js环境或者ECMAScript3或者更高的JavaScript的引擎中。

## JavaScript的问题

JavaScript的问题主要有如下几个：

1. JavaScript的类型异常只有在运行的时候才可以发现。

2. 因为JavaScript的函数的类型是不明确的，有可能导致函数的最终功能导致出现问题，如下这段代码：

```JavaScript
function sum(x, y){
  return x + y
}
sum(100, '100') // 100100
```


## TypeScript的优势

JavaScript是动态类型的编程语言，所谓的动态类型，就是在编译时候时候才知道其数据类型是`Number` 还是`String`；而TypeScript是静态类型的编程语言，所谓的静态类型就是编写的时候就知道其数据类型是什么，比例定义一个变量

```TypeScript
let num: number = 6;
```


`num`这个变量从头到尾只能是`number`类型，如果将字符串赋值给他就会抛出异常。

所以说，TypeScript的优势如下：

1. 在开发过程中，就可以定位的错误的地方，方便我们检查错误。

2. TypeScript属于渐进式的编程语言，如果不懂其语法可以完全将其当做JavaScript来用。

3. 减少了我们在开发过程中的不必要的类型检查。

4. 静态类型的代码提示是要优于静态类型代码提示的。

5. 在进行项目重构的时候会更加简单。

6. 静态类型的代码语义化比动态类型更好，可读性更好。

## TypeScript的缺点

TypeScript并不是只有优点，没有缺点的，它的缺点都是相对于JavaScript来说，具体如下几点：

1. 相对于JavaScript来说，TypeScript本身增加了许多的概念。例如泛型、接口等概念。

2. 使用TypeScript开发在短期内会增加一些成本，但是对于一个需要长期维护的项目，TypeScript能够减少其维护成本。

3. 可能和一些库结合的不是很完美。

## TypeScript的运行环境

TypeScript是运行是建立在Node.js环境基础之上的，所以需要先安装一下Node.js。

> 安装Node.js等一系列操作以忽略


安装TypeScript的命令如下

```PowerShell
npm install -g typescript@3.6.4
```


> 这里我通过@指定版本号，也可以不指定版本号


安装完TypeScript后，还需要安装一个`ts-node`的工具，如果安装该工具话是不能直接运行TS代码的，需要将TS的代码编成JavaScript后才能执行。执行流程如下

```PowerShell
# 编译 TS 代码
tsc demo.ts 
# 编译后会得到 demo.js 文件，然后就可以运行了 
```


如果安装了node-ts工具后，就可以直接执行TS代码了。具体步骤如下

```PowerShell
# 1. 全局安装 
npm install -g ts-node@8.4.1
# 2. 运行代码
ts-node demo.ts
```


> 值得注意的是安装之后的目录一定需要在环境变量中，不然会报错的。


## 作用域问题

我们在项目中执行`ts`文件时，**如果不同文件中存在相同的变量名是会抛出异常的** ，示例代码如下：

`a.ts`

```TypeScript
let str: string = 'Hello World'

```


`b.ts`

```TypeScript
let str: string = '一碗周'

```


此时就会抛出一个异常，即`无法重新声明块范围变量“str”`，如果编辑器是VScode的话，鼠标悬停到变量名会进行提示。

解决这个问题的方式有两种，第一种是为每个文件创建一个立即执行函数（即匿名函数），保证每个文件都拥有单独的作用域。示例代码如下：

```TypeScript
(function() {
  let str: string = '一碗周'
}){}
```


第二种方式是使用`export`将当前文件作为模块导出。示例代码如下：

```python
let str: string = '一碗周'

export {}

```


