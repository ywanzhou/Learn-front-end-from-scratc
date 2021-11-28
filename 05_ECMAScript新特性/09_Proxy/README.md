# Proxy

## 概述

在ES2015的标准中新增了一个Proxy，用于修改某些操作的默认行为，等同于在语言层面作出的修改，所以说这是属于一种**元编程** ，（meta programming），即对编程语言进行编程。

Proxy对象用于创建一个对象的“代理”，从而实现基本能操作的拦截和自定义(如属性查找、赋值、枚举、函数调用等)。

> 通俗一点的解释就是，房子比作原始对象，中介比作Proxy，我们租房可以直接找原始房源，也可以通过中介，中介在其中可以屏蔽原始信息。


Proxy的语法结构如下所示：

```JavaScript
const p = new Proxy(target, handler)
```


参数说明：

- `target`：要使用`Proxy` 代理的目标对象(可以是任何类型的对象，包括原生数组，函数，甚至另一个代理)。

- `handler`：这个参数是一个配置对象，对于每一个被代理的操作，都需要提供一个对应的处理函数。

### Proxy可拦截的操作

Proxy可拦截的操作如下表所示：

|拦截  ⽅法|触发⽅式|
|---|---|
|`get(target, propKey, receiver)`|读取某个属性|
|`set(target, propKey, value, receiver)`|写⼊某个属性|
|`has(target, propKey)`|`in`操作符|
|`deleteProperty(target, propKey)`|`delete`操作符|
|`getPrototypeOf(target)`|`Object.getPropertypeOf()`|
|`setPrototypeOf(target, proto)`|`Object.setPrototypeOf()`|
|`isExtensible(target)`|`Object.isExtensible()`|
|`preventExtensions(target)`|`Object.preventExtensions()`|
|`getOwnPropertyDescriptor(target, propKey)`|`Object.getOwnPropertyDescriptor()`|
|`defineProperty(target, propKey, propDesc)`|`Object.defineProperty()`|
|`ownKeys(target)`|`Object.keys()` 、`Object.getOwnPropertyNames()`、`Object.getOwnPropertySymbols()`|
|`apply(target, thisArg, args)`|调⽤⼀个函数|
|`construct(target, args)`|⽤ new 调⽤⼀个函数|



以上就是Proxy可拦截的所有操作。

## Proxy实例的方法

下面我们就对上面那些拦截操作进行逐一演示

### get()

`get`方法用于拦截某个属性的读取操作，该方法可以接受是三个参数，分别是目标对象、被获取的属性名和Proxy实例本身(可选)。

下面是对`get`的简单用法，如果我们访问一个对象中未定义的属性，可以通过`get`使其抛出一个异常。

```JavaScript
const person = {
    name: '一碗周'
}

const proxy = new Proxy(person, {
    /**
     * @param {object} target 目标对象
     * @param {string} propKey 被获取的属性名
     * @param {object} receiver Proxy或者继承Proxy的对象
     */
    get (target, propKey, receiver) {
        if (propKey in target) {
            return target[propKey]
        } else {
            throw new ReferenceError(`属性：${propKey} 不存在`)
        }
    }
})

proxy.name // 一碗周
proxy.hobby // 抛出异常
```


`get`方法是可以继承的，看下面这段代码

```JavaScript
const person = {
    name: '一碗周'
}

const proxy = new Proxy(person, {
    get (target, properKey, receiver) {
        console.log(`获取${properKey}属性的值：${target[properKey]}`)
        return target[properKey]
    }
})

// 通过proxy创建一个新的对象
const obj = Object.create(proxy)

obj.name // 获取name属性的值：一碗周
```


上面代码中，拦截操作定义在`Prototype`对象上面，所以如果读取`obj`对象继承的属性时，拦截会生效。

我们还可以通过`get`方法去实现数据读取负数的索引，实现代码如下：

```JavaScript
function createArray (...elements) {
    let handler = {
        get (target, properKey, receiver) {
            // 1. 缓存传入的索引值
            let index = Number(properKey)
            if (index < 0) {
                // 例如 target 的长度为7，传递的 index 为 -1, 最后的 properKey 等于 6 即最后一项
                properKey = String(target.length + index)
            }
            /**
             * Reflect.get() 的作用是读取一个对象中的值
             */
            return Reflect.get(target, properKey, receiver)
        }
    }
    let target = []
    target.push(...elements)
    return new Proxy(target, handler)
}
const arr = createArray(1, 2, 3, 4, 5)

console.log(arr[-1]) // 5
```


值得注意的是，如果一个属性是不可配置（configurable）且不可写（writable），则Proxy不能修改该属性，否则就会抛出异常。

### set()

`set`方法用于拦截某个对象的修改操作，该方法接受四个参数分别是目标对象、被获取的属性名、修改后的值和Proxy实例本身(可选)。

下面这个例子就规定了修改某个属性必须是某个类型的值，否则就会抛出异常

```JavaScript
const person = {
    name: '一碗周'
}

// 1. 根据指定条件修改name属性

const proxy = new Proxy(person, {
    /**
     * @param {object} target 目标对象
     * @param {string} propKey 被获取的属性名
     * @param {any} value 修改后的值
     * @param {object} receiver Proxy或者继承Proxy的对象
     * @returns {boolean} 返回true表示成功，严格模式下返回false则会抛出一个异常
     */
    set (target, propKey, value, receiver) {
        // 规定修改name属性只能修改为一个字符串，否则就会抛出异常
        if (propKey === 'name' && typeof value !== "string") {
            throw new TypeError('修改的name并不是一个string')
        }
        target[propKey] = value
        return true
    }
})

// proxy.name = 1 // 抛出异常

proxy.name = '一碗周' // 修改成功

```


我们该可以利用`set`方法进行数据绑定，如果对象发生改变，就自动更新我们的DOM。

示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css" rel="stylesheet" />
  <title>通过set自动更新dom</title>
</head>

<body>
  <div class="card" style="width: 300px; margin: 100px auto">
    <div class="card-body">
      <h1 id="name"></h1>
      <button id="btn" class="btn btn-primary">修改</button>
    </div>
  </div>
  <script>
    // 获取DOM节点
    const name = document.getElementById('name')
    const btn = document.getElementById('btn')
    // 定义一个修改值的函数
    const updateDOM = (el, value) => {
      el.innerHTML = value
    }
    const person = new Proxy({
      name: '一碗粥',
    }, {
      set(target, propKey, value) {
        // 如果里面的值改变就去调用我们的updateDOM
        updateDOM(name, value)
        target[propKey] = value
        return true
      },
    })
    name.innerHTML = person.name

    // 点击按钮触发修改操作
    btn.addEventListener('click', () => {
      person.name === '一碗周' ?
        (person.name = '一碗粥') :
        (person.name = '一碗周')
    })
  </script>
</body>

</html>

```


**值得注意的是** 如果目标对象自身的某个属性不可写，那么`set`方法将不起作用。

### apply()

`apply`方法拦截函数的调用、`call`、`apply`和`Reflect.apply()`操作。

该方法接受三个参数分别是目标对象、目标对象的上下文对象（`this`）和目标对象的参数数组。

示例代码如下：

```JavaScript
const proxy = new Proxy(sayMe = () => { }, {
    apply (target, thisArg, args) {
        return '一碗周'
    }
})

console.log(proxy()) // 一碗周
```


值得注意的是目标对象必须是可调用的，也就是说必须是一个函数。

### construct()

`construct`用于拦截`new`关键字或者`Reflect.construct()`。

该方法接受三个参数，分别是目标对象、`constructor`的参数列表和最初被调用的构造函数。该方法必须返回一个对象，否则会抛出异常。

示例代码如下：

```JavaScript
function Hero (name) {
    this.name = name
}

const proxy = new Proxy(Hero, {
    construct (target, argArray, newTarget) {
        console.log('construct执行了');
        return new target(...argArray)
    }
})

new proxy('一碗周')  // construct执行了
```


值得注意的是：由于`construct()`拦截的是构造函数，所以它的目标对象必须是函数，否则就会报错。

### has()

`has`方法主要是用来拦截`in`操作符的，该方法接受两个参数，分别指的是目标对象和需要查询的属性名。

我们通过`has`方法，使`_`开头的属性不被`in`运算符发现，实现代码如下：

```JavaScript
const person = {
    name: '一碗周',
    _hobby: 'coding'
}

const proxy = new Proxy(person, {
    /** 
     * @param {object} target 目标对象
     * @param {string} propKey 需查询的属性名
     * @returns {boolean} 
     */
    has (target, propKey) {
        if (propKey[0] === '_') return false
        return propKey in target
    }
})

console.log('name' in proxy) // true
console.log('_hobby' in proxy) // false
```


值得注意的是如果原对象不可配置或者禁止扩展，这时`has`就会抛出异常。

### deleteProperty()

`deleteProperty`方法用于拦截对属性执行的`delete`操作(`delete`关键字以及`Reflect.deleteProperty()`方法)，如果返回`false`或者抛出异常则无法对属性执行删除操作。

该方法接受两个参数，分别是是目标对象和被删除的属性名。

现在我们需要对`_`开头的属性不可进行`delete`操作，示例代码如下：

```JavaScript
const person = {
    name: '一碗周',
    _hobby: 'coding'
}

// 不可对 _ 开头的属性进行删除
const proxy = new Proxy(person, {
    /** 
     * @param {object} target 目标对象
     * @param {string} propKey 需删除的属性名
     * @returns {boolean} 返回true表示删除成功，返回false不可删除
     */
    deleteProperty (target, propKey) {
        if (propKey[0] === '_') return false
        return true
    }
})

delete proxy._hobby

console.log(proxy._hobby) // coding
```


**值得注意的是** 如果目标对象的属性是不可配置的，那么该属性不能被删除。

### getPrototypeOf()

`getPrototypeOf`会拦截如下五种操作（方法/属性/运算符）：

- `Object.prototype.__proto__`

- `Object.prototype.isPrototypeOf()`

- `Object.getPrototypeOf()<br />`

- `Reflect.getPrototypeOf()`

- `instanceof`

该方法接受一个参数，就是被代理的目标对象，返回值是一个对象或者`null`。

示例代码如下：

```jsd
var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf (target) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype, // true
    p.__proto__ === Array.prototype,               // true
    Array.prototype.isPrototypeOf(p),              // true
    p instanceof Array                             // true
);
```


### setPrototypeOf()

`setPrototypeOf`会拦截如下两种种操作：

- `Object.setPrototypeOf()`

- `Reflect.setPrototypeOf()`

该方法接受两个参数，一个是**要被修改的原型的目标对象** 和**对象的新原型或者null** 。方法返回一个布尔值，返回`true`表示修改成功，返回`false`表示修改失败。

示例代码如下(只要修改原型就会抛出异常)：

```jsd
var proto = {};
var proxy = new Proxy({}, {
    /**
     * @param {object} target 要被修改的原型的目标对象
     * @param {object} proto 对象的新原型或者null
     * @returns {boolean} true表示修改成功，返回false表示修改失败
     */
    setPrototypeOf (target, proto) {
        throw new Error('无法改变原型');
    }
});
Object.setPrototypeOf(proxy, proto);
  // Error: 无法改变原型
```


### isExtensible()

`isExtensible`方法用于拦截`Object.isExtensible()`或者`Reflect.isExtensible()`操作。该方法接受一个参数，就是目标对象，返回一个布尔值(否则就会抛出异常)。

示例代码如下：

```JavaScript
const proxy = new Proxy({}, {
    isExtensible () {
        console.log('isExtensible执行了');
        return true
    }
})

Object.isExtensible(proxy) // isExtensible执行了
```


### preventExtensions()

`preventExtensions`方法用于拦截`Object.preventExtensions()`或者`Reflect.preventExtensions()`操作。该方法接受一个参数，就是目标对象，返回一个布尔值(如果目标对象是可扩展的，那么只能返回 `false`)。

示例代码如下：

```JavaScript
const proxy = new Proxy({}, {
    preventExtensions (target) {
        console.log('preventExtensions执行了')
        Object.preventExtensions(target)
        return true
    }
})

Object.preventExtensions(proxy) // preventExtensions执行了
```


### getOwnPropertyDescriptor()

`getOwnPropertyDescriptor`方法用于拦截`Object.getOwnPropertyDescriptor()`或者`Reflect.getOwnPropertyDescriptor()`操作。

该方法接受两个参数，一个是**目标对象** 和**返回属性名称的描述** 。该方法的返回值必须是一个Object或者`undefined`。

示例代码如下：

```JavaScript
const proxy = new Proxy({
    name: '一碗周'
}, {
    /**
     * 
     * @param {object} target 目标对象
     * @param {string} propKey 属性名
     */
    getOwnPropertyDescriptor (target, propKey) {
        console.log('getOwnPropertyDescriptor执行了');
        return Object.getOwnPropertyDescriptor(target, propKey)
    }
})

Object.getOwnPropertyDescriptors(proxy, 'name') // getOwnPropertyDescriptor执行了
```


### defineProperty()

`defineProperty`方法用于拦截以下操作：

- `Object.defineProperty()`

- `Reflect.defineProperty()`

- `proxy.property='value'`

该方法接受三个参数，分别是目标对象，属性名和待定义或修改的属性的描述符。返回值是一个布尔型表示是否修改成功。

示例代码如下：

```JavaScript
const proxy = new Proxy({
    name: '一碗周'
}, {
    /**
     * 
     * @param {object} target 目标对象
     * @param {string} propKey 属性名
     * @param {object} descriptor 待定义或修改的属性的描述符
     * @returns {boolean} 是否修改成功
     */
    defineProperty (target, propKey, descriptor) {
        console.log('defineProperty执行了');
        Object.defineProperty(target, propKey, descriptor)
        return true
    }
})

Object.defineProperty(proxy, 'name', {
    value: '一碗周',
    writable: false
}) // defineProperty执行了

console.log(proxy) // { name: '一碗周' }
```


### ownKeys()


`ownKeys`方法用来拦截对象自身属性的读取操作。具体来说，拦截以下操作。

- `Object.getOwnPropertyNames()<br />`

- `Object.getOwnPropertySymbols()<br />`

- `Object.keys()`

- `Reflect.ownKeys()`

- `for...in`循环

该方法接受一个参数，就是目标对象，必须返回一个可枚举对象，否则就会抛出异常。

示例代码如下：

```JavaScript
const proxy = new Proxy({}, {
    ownKeys: function (target) {
        console.log('ownKeys执行了');
        return ['a', 'b', 'c'];
    }
});

Object.getOwnPropertyNames(proxy) // ownKeys执行了
```


## Proxy.revocable()

`Proxy.revocable()` 方法可以用来创建一个可撤销的拦截对象。

语法结构如下所示：

```JavaScript
let { proxy, revoke } = Proxy.revocable(target, handler);
```


- `proxy`：拦截对象，与`new Proxy(target, handler)`创建的无区别

- `revoke `：一个方法，执行该方法及撤销这个拦截对象

- `target`和`handler`同上

示例代码如下：

```JavaScript
const person = {
    name: '一碗周'
}

const { proxy, revoke } = Proxy.revocable(person, {
    get (target, propKey, receiver) {
        if (propKey in target) {
            return target[propKey]
        } else {
            throw new ReferenceError(`属性：${propKey} 不存在`)
        }
    }
})

console.log(proxy.name)
// console.log(proxy.age) // ReferenceError: 属性：age 不存在
// 调用revoke无需传递任何参数
revoke()
// 一旦撤销就不允许再次访问
console.log(proxy.name) // Cannot perform 'get' on a proxy that has been revoked
```


## this指向

在Proxy中参数`target`中的`this`是指向`target`的，而`handler`中的`this`是指向`handler`的，具体参考

[https://es6.ruanyifeng.com/#docs/proxy#this](https://es6.ruanyifeng.com/#docs/proxy#this)

