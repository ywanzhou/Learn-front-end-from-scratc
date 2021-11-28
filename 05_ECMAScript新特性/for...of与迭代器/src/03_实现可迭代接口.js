// const obj = {}

// const obj = {
//     [Symbol.iterator] () {
//         return {
//             next () {
//                 console.log('迭代器执行了');
//                 return {
//                     value: '11',
//                     done: false
//                 }
//             }
//         }
//     }
// }

// for (item of obj) {
//     console.log(111);
// }

// const TodoList = {
//     play: ['篮球', '足球', '羽毛球'],
//     job: ['coding'],
//     study: ['JavaScript', 'HTML'],
// }
// TodoList[Symbol.iterator] = function () {
//     const arr = this.play.concat(this.job, this.study)
//     let index = 0
//     return {
//         next: function () {
//             return {
//                 value: arr[index],
//                 done: index++ >= arr.length,
//             }
//         },
//     }
// }
// for (item of TodoList) {
//     console.log(item)
//     /* 代码运行结果
//     篮球
//     足球
//     羽毛球
//     coding
//     JavaScript
//     HTML
//     */
// }
// // 实现迭代接口后 对象可以使用 ... 展开运算符
// console.log(...TodoList)

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
