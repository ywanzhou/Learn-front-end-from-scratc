# for...of循环与迭代器

## 写在前面

ECMAScript新增的`for...of`循环，它可以遍历任何一个可迭代的对象，本篇文章将围绕`for...of`循环与迭代器展开，大致包括以下内容：

![](image/01_%E5%AF%BC%E8%AF%BB.png)

## for...of循环

ECMAScript新增的`for...of`循环语句用于遍历一个**可迭代对象** ，可迭代对象包括`Array`、`Map`、`Set`、`String`、`TypeArray`、`arguments`以及**实现可迭代接口的任意对象** 。

它的语法非常简单与`for...in`类似，如果不了解可以查看[for...in语句](https://juejin.cn/post/6994825550174879758#heading-13)了解。

如下代码展示了`for...of`的用法

```JavaScript
// 创建可迭代对象
const arr = [10, 20, 30]
const map = new Map([["a", 1], ["b", 2], ["c", 3]])
const set = new Set(arr)

for (let _arr of arr) {
  console.log(_arr) // 10 20 30 
}

// 可以通过解耦赋值的方式直接将 map 中的结构展开
for (let [key, value] of map) {
  console.log(key, value) // a 1   b 2   c 3 
}
for (let _set of set) {
  console.log(_set) // 10 20 30 
}

```


`for...of`循环同最普通的`for`循环一样是可以终止的，示例代码如下：

```JavaScript
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

for (num of arr) {
  if (num === 3) {
    // 当 num 的值遍历到 3 时，跳过本次循环
    continue
  } else if (num === 6) {
    // 当 num 的值遍历到 6 时，终止本次循环
    break
  }
  console.log(num);
  /*
  1
  2
  4
  5
  */
}

```


### for...in和for...of和forEach的区别

- `for...in`语句以任意顺序迭代对象的**可枚举属性** 。


- `for...of`语句遍历可迭代对象定义要**迭代的数据** 。

- `forEach`中不可以使用`break`或者`continue`等关键字

## 可迭代接口

Iterator即迭代器，它是一种接口，为各种不同的数据结构提供了统一的访问机制，换句话说，只有任何数据结构部署了迭代接口，就可以使用统一的方式的来遍历它。

实现可迭代接口的数据结构，一般都自身实现或继承了以`Symbol.iterator`属性的，就属于可迭代对象。`Symbol.iterator`属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。

一个包含`next()`方法的对象，才可以称为一个迭代对象。`next()`对象的会有返回一个对象，对象中包含两个值，如下所示：

- `value`：迭代器返回的任何`JavaScript`值。`done`为`true`时可省略。

- `done`：一个布尔值，为`false`时表示迭代未停止，为`true`时立即停止迭代器，且可以省略`value`的值。

JavaScript原生提供的迭代器接口如下图所示：

![](image/%E9%BB%98%E8%AE%A4%E7%9A%84%E5%8F%AF%E8%BF%AD%E4%BB%A3%E6%8E%A5%E5%8F%A3.png)

## 实现可迭代接口

在前面我们学习了可迭代接口中的含义，现在我们来自己实现一个可迭代接口。

首先，我们直接使用`for...of`来遍历一个未实现迭代接口的对象：

```JavaScript
const obj = {}

for (item of obj) {
    console.log(111);
}
```


这段代码会抛出`TypeError`异常，描述信息为`obj is not iterable`。

现在我们为`obj`来实现一个迭代器，代码如下：

```JavaScript
const obj = {
    [Symbol.iterator] () {
        return {
            next () {
                console.log('迭代器执行了');
                return {
                    value: '',
                    done: true
                }
            }
        }
    }
}
```


我们在`next()`方法中添加了一个打印，为了验证迭代器执行了，最终的运行结果为

```纯文本
迭代器执行了
```


为什么`for...of`循环体汇中的`111`没有打印呢，是因为`next()`方法中的`done`我们写死了，它的值为`true`，就停止了迭代器的执行，如果`done`不会为`true`则这个循环不会结束。

现在我们为下面这个对象实现一个可迭代接口，对象如下：

```JavaScript
const TODOList = {
    play: ['篮球', '足球', '羽毛球'],
    job: ['coding'],
    study: ['JavaScript', 'HTML']
}
```


实现一个遍历所有TODO的可迭代接口，代码如下：

```JavaScript
TodoList[Symbol.iterator] = function () {
    const arr = this.play.concat(this.job, this.study)
    let index = 0
    return {
        next: function () {
            return {
                value: arr[index],
                done: index++ >= arr.length,
            }
        },
    }
}
```


然后通过`for...of`进行遍历，代码和执行结果如下：

```JavaScript
for (item of TodoList) {
    console.log(item)
    /* 代码运行结果
    篮球
    足球
    羽毛球
    coding
    JavaScript
    HTML
    */
}
// 实现迭代接口后 对象可以使用 ... 展开运算符
console.log(...TodoList)

```


迭代器的触发除了使用`for...of`语句会触发之外，在解耦赋值或者使用`...`展开运算符等都会触发迭代接口的执行

### return()方法

迭代器除了`next()`方法，还存在一个`return()`方法，该方法会在迭代器出现异常或者遇到`break`的时候调用，一般用于清空或者释放资源。示例代码如下：

```JavaScript
const TodoList = {
    play: ['篮球', '足球', '羽毛球'],
    job: ['coding'],
    study: ['JavaScript', 'HTML'],
}
TodoList[Symbol.iterator] = function () {
    let arr = this.play.concat(this.job, this.study)
    let index = 0
    return {
        next: function () {
            return {
                value: arr[index],
                done: index++ >= arr.length,
            }
        },
        return: function () {
            // 释放资源
            arr = index = null
            console.log('资源被清空了')
            return { done: true }
        },
    }
}
for (item of TodoList) {
    console.log(item)
    if (item === 'coding') {
        break
    }
}
```


代码的运行结果如下所示：

```纯文本
篮球
足球
羽毛球
coding
资源被清空了
```


## 模拟实现for...of循环

模拟实现`for...of`的语句实现起来比较简单，本质就是通过`Symbol.iterator`属性获取迭代器对象，然后使用`while`循环遍历一下即可实现，实现代码如下：

```JavaScript
function forOf(obj, callback) {
    let iterable, result

    if (typeof obj[Symbol.iterator] !== 'function')
        throw new TypeError(result + ' is not iterable')
    if (typeof callback !== 'function')
        throw new TypeError('cb must be callback')

    iterable = obj[Symbol.iterator]()

    result = iterable.next()
    while (!result.done) {
        callback(result.value)
        result = iterable.next()
    }
}
```


测试一下我们这个`forOf`语句的，代码如下：

```JavaScript
let arr = [1, 2, 3, 4]
forOf(arr, item => {
    console.log(item)
})

```


代码运行结果如下：

```纯文本
1
2
3
4
```




