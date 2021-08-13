var obj = {
    name: 'MacBook',
    price: 9999
}
console.log(obj.name, obj.price) // MacBook      9999
// 配合 . 的方式删除其属性
delete obj.name
// 配合 [] 的当时删除其属性
delete obj.price
console.log(obj.name, obj.price) // undefined      undefined