# 联合类型、交叉类型和类型保护

## 联合类型

所谓的联合类型就是定义一些类型，定义的变量只需要满足任意一种类型即可，联合类型使用`|`定义，示例代码如下：

```TypeScript
// 通过 | 符号定义联合类型
let value: number | boolean | string = '一碗周'
value = 18

```


在上面的代码中我们定义了一个`value`变量，该变量可以是`number`、`boolean`或者`string`类型。

## 交叉类型

介绍了联合类型，然后介绍一下与之特别相似的交叉类型。

所谓的交叉类型就是需要满足所有类型，交叉类型使用`&`符号定义。示例代码如下：

```TypeScript
// 定义三个普通接口类型
interface Name {
  name: string
}
interface Age {
  age: number
}
interface Hobby {
  hobby: string
}
// 定义一个对象，该对象为上面三个对象的联合类型
let person: Name & Age & Hobby = {
  // 如果少分配一个类型将会抛出异常
  name: '一碗周',
  age: 18,
  hobby: 'coding',
}

```


## 类型保护

现在我们有一个需求：获取一个具有任意类型数组中第一个数字。

实现代码如下：

```TypeScript
// 定义一个包含number或者string的数组
const arr: (number | string)[] = [1, '数字']
// 遍历数组返回第一个数字
const getValue: (arr: (number | string)[]) => number = (
  arr: (number | string)[],
): number => {
  for (let i = 0; i < arr.length; i++) {
    // 如果当前值转换为数字时候不是一个 NaN 则返回
    if (!isNaN(Number(arr[i]))) {
      return arr[i] // 不能将类型“string | number”分配给类型“number”。
    }
  }
}
```


上述代码中`return`时并不知道返回的是不是一个`number`类型。所以将会抛出异常。

上述功能可以通过类型断言来完成，示例代码如下：

```TypeScript
const getValue: (arr: (number | string)[]) => number = (
  arr: (number | string)[],
): number => {
  for (let i = 0; i < arr.length; i++) {
    // 如果当前值转换为数字时候不是一个 NaN 则返回
    if (!isNaN(Number(arr[i]))) {
      return arr[i] as number // 告诉 编译器 我返回的就是一个 number
    }
  }
}

```


> 什么是类型断言请参考：[类型断言](https://www.wolai.com/vf5oiSdAf3wRBFs1Y1NcAQ)


如果使用类型断言来说明，如果想要的数据类型不一样时，就会显得比较繁琐。这个时候就需要类型保护来完成该功能，类型保护主要分为以下三种：

### 自定义类型保护

自定义类型保护的方式就是定义一个函数，该函数是的返回结构是一个`parameterName is type`的形式，该形式是一个**类型谓词** 。`parameterName`必须是来自于当前函数参数里的一个参数名。示例代码如下：

```TypeScript
// 使用自定义类型保护
// 1. 定义一个函数 其返回值是一个 类型谓词，即 parameterName is Type 也就是 参数名 is 类型 的形式
function isNumber(value: number | string): value is number {
  // 如果返回 true 则说明 传入的 value 是 is 后面的type
  return !isNaN(Number(value))
}
// 2. 定义一个获取数字的函数
const getNumber: (value: number | string) => number = (
  value: number | string,
): number => {
  // 如果调用 isNumber 的值为 true 则说明 value 是一个数字，所以将数字返回
  if (isNumber(value)) {
    return value
  }
}
// 3. 调用获取最终的数值
const getValue: (arr: (number | string)[]) => number = (
  arr: (number | string)[],
): number => {
  for (let i = 0; i < arr.length; i++) {
    // 如果返回数字，转换为 boolean 值为 true
    if (getNumber(arr[i]) || getNumber(arr[i]) === 0) {
      return getNumber(arr[i])
    }
  }
}

```


定义第二个函数的原因是在数组中直接使用`i`作为返回值还是有问题的，所以定义一个函数过渡一下。

### `typeof` 类型保护

JavaScript 中的`typeof`关键字可以判断当前类型，但是仅仅只能判断`number`、`string`、`boolean`和`symbol`四种类型。

在这个需求中就足够了，接下来我们看看如何通过`typeof`来实现类型保护。示例代码如下：

```TypeScript
// 1. 定义一个获取数字的函数
const getNumber: (value: number | string) => number = (
  value: number | string,
): number => {
  // 判断当前是否为字符串，如果是返回当前值
  if (typeof value === 'number') {
    return value
  }
}
// 2. 调用获取最终的数值
const getValue: (arr: (number | string)[]) => number = (
  arr: (number | string)[],
): number => {
  for (let i = 0; i < arr.length; i++) {
    // 如果返回数字，转换为 boolean 值为 true
    if (getNumber(arr[i]) || getNumber(arr[i]) === 0) {
      return getNumber(arr[i])
    }
  }
}

```


### `instanceof`类型保护

`instanceof`操作符也是JavaScript中提供的原生操作符，它用来判断一个实例是不是某个构造函数创建的，或者是不是使用ES6语法的某个类创建的。在TypeScript中也可以通过`instanceof`操作符来实现类型保护，示例代码如下：

```TypeScript
/**
 * 由于 instanceof 仅仅支持引用类型，不支持原始类型，所以说这里需要进行一下改动，将数组修改为如下：
 */
const arr2: (Number | String)[] = [new String('彼岸繁華'), new Number(10)]
// 1. 定义一个获取数字的函数
const getNumber: (value) => number = (value): number => {
  // 判断当前是否为 Number 类型，将当前值转换为字符串返回
  if (value instanceof Number) {
    return Number(value)
  }
}
// 2. 调用获取最终的数值
const getValue: (arr: (Number | String)[]) => number = (
  arr: (Number | String)[],
): number => {
  for (let i = 0; i < arr.length; i++) {
    // 如果返回数字，转换为 boolean 值为 true
    if (getNumber(arr[i]) || getNumber(arr[i]) === 0) {
      return getNumber(arr[i])
    }
  }
}
```


使用`instanceof`时需要注意一下两点：

- 只适应于任何引用类型，不支持原始类型。

- 前者的原型链上是否 `包含` 后者的原型对象。

