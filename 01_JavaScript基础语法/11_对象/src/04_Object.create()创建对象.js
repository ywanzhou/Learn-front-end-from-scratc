// 定义一个对象作为原型
var bird = {
    name: '小鸟',
    sayMe: function () {
        console.log('我是一只小鸟');
    }
}

// 使用object.create()创建对象，并使用 bird 作为原型对象

var swallow = Object.create(bird)

console.log(swallow.name) // 小鸟