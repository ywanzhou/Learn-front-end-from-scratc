# 对象的扩展

对象（object）是JavaScript最重要的数据结构。ECMAScript 2015对它进行了重大升级，下面我们来看一下它的改变

## 对象的属性

### 属性表示法

ECMAScript 2015允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

示例代码如下所示：

```JavaScript
let name = '一碗周'
let job = '前端攻城狮'

// 属性表示法 直接写入变量
let obj1 = {
  name,
  job,
  sayMe() {
    console.log(name)
  }
}
// 等同于 
let obj2 = {
  name: name,
  job: job,
  sayMe: function() {
    console.log(name)
  }
}
console.log(obj1, obj2);
```


## 计算属性名

在JavaScript中，我们定义属性时，有两种方式：中括号`[]`或`.`的方式：

```JavaScript
// 方法一
obj.foo = true;
// 方法二
obj['a'+'bc'] = 123;
```


`.`运算符具有很大的局限性，比如`first name`这种属性只能通过中括号的方式来定义。中括号的方式允许我们使用变量或者在使用标识符时会导致语法错误的字符串直接量来定义属性。例如：

```JavaScript
let person = {},
  lastName = "last name";

person["first name"] = "Nicholas";
person[lastName] = "Zakas";
console.log(person["first name"]);      // "Nicholas"
console.log(person[lastName]);          // "Zakas"
```


这两种方式只能通过中括号的方式来定义的。在ES5中，你可以在对象直接量中使用字符串直接量作为属性，例如：

```JavaScript
let person = {
  "first name": "Nicholas"
};
console.log(person["first name"]);      // "Nicholas"
```


但是当我们的属性名存在一个变量中或者需要计算时，使用对象直接量是无法定义属性的。

在ES5之前，**如果属性名是个变量或者需要动态计算** ，则只能通过 对象`.[变量名]` 的方式去访问。

```html
let p = {
  name : '李四',
  age : 20
}
let attName = 'name';
console.log(p[attName]) //这里 attName表示的是一个变量名。
// 李四

```


而且这种动态计算属性名的方式 在字面量中 是无法使用的。

```JavaScript
let attName = 'name';
  let p = {
    attName : '李四',  // 这里的attName是属性名，相当于各级p定义了属性名叫 attName的属性。
    age : 20
  }
console.log(p[attName])  // undefined
```


在ECMAScript 2015中，把属性名用`[ ]`括起来，则括号中就可以引用提前定义的变量。

```JavaScript
let attName = 'name';
  let p = {
    [attName] : '李四',  // 引用了变量attName。相当于添加了一个属性名为name的属性
    age : 20
  }
console.log(p[attName])  // 李四
```


在对象直接量中的中括号表明属性名是需要被计算的，它的内容被计算为字符串

## Object 的方法

### Object.is() 方法

ECMAScript 2015比较两个值是否相等，只有两个运算符：相等运算符（`==`）和严格相等运算符（`===`）。

但是这两个运算符都具有缺点

- 使用相等运算符的时候，会自动转换数据类型

- 全等运算符会导致`NaN`不等于自身，以及`+0`等于`-0`。

ECMAScript 2015提出 “*Same-value equality* ”（同值相等）算法，用来解决这个问题。`Object.is`就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（`===`）的行为基本一致。

语法结构如下所示：

```JavaScript
Object.is(value1, value2);
```


参数说明：

- `value1`：被比较的第一个值。

- `value2`：被比较的第二个值。

返回一个布尔值。

示例代码如下所示：

```JavaScript
console.log(+0 === -0); //true
console.log(NaN === NaN); // false

console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
```


### Object.assign()方法

`Object.assign()`方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将**返回目标对象** 。

语法结构如下所示：

```JavaScript
Object.assign(target, ...sources)
```


参数说明：

- `target` ：目标对象

- `sources` ：源对象

值得注意的是，如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。

示例代码如下所示：

```JavaScript
let sources = {
  name: '一碗周',
  job: '前端攻城狮'
}
let target = {}
// 使用 assign() 方法所有可枚举属性的值从一个或多个源对象分配到目标对象。
Object.assign(target, sources)
console.log(target);
// 验证是否为深复制
target.name = '一碗粥'
console.log(target, sources); //{ name: '一碗周', job: '前端攻城狮' } { name: '一碗粥', job: '前端攻城狮' }
```


## super 关键字

我们知道，`this`关键字总是指向函数所在的当前对象，ECMAScript 2015又新增了另一个类似的关键字`super`，指向当前对象的原型对象。

```JavaScript
// 定义一个要作为原型对象的对象
const proto = {
  v: 'Hello'
}
// 定义一个对象
const obj = {
  v: 'World',
  printV1() {
    console.log(this.v);
  },
  // 使用 super 关键字
  printV2() {
    console.log(super.v);
  }
}
// 将obj 对象的原型修改为 prtot
Object.setPrototypeOf(obj, proto)
// this 的用法
obj.printV1() // World
// super 的用法
obj.printV2() // Hello
```


值得注意的是，`super`关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。目前，只有对象方法的简写法可以让JavaScript引擎确认，定义的是对象的方法。

## 对象的扩展运算符

对象的扩展运算符（`...`）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。

示例代码如下所示：

```JavaScript
// 对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
let obj = {
  name: '一碗周',
  job: '前端攻城狮'
}
let newObj = {
  ...obj
}
console.log(newObj); // { name: '一碗周', job: '前端攻城狮' }
// 验证是否为深复制
newObj.name = '一碗粥'
console.log(obj, newObj); // { name: '一碗周', job: '前端攻城狮' } { name: '一碗粥', job: '前端攻城狮' }
```


由于数组是特殊的对象，所以对象的扩展运算符也可以用于数组。

```JavaScript
let arr = [1, 2, 3, 4, 5]
let obj = {
  ...arr
}
console.log(obj); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
```


如果扩展运算符后面不是对象，则会自动将其转为对象。

```JavaScript
console.log(
  {
  ...1 // 等同于 {...Object(1)}
  }
); // {}
console.log(
  {
  ...true // 等同于 {...Object(true)}
  }
); // {}
console.log(
  {
  ...undefined // 等同于 {...Object(undefined)}
  }
); // {}
console.log(
  {
  ...null // 等同于 {...Object(null)}
  }
); // {}
```



