var person = {
    name: '李雷',
    age: 28,
    job: '售货员',
    sex: '男'
}
for (attr in person) {
    console.log(person[attr])
}

// 1. 获取属性名称
var attrNames = Object.keys(person)
for (var i = 0; i < attrNames.length; i++) {
    var attrName = attrNames[i]
    // 通过属性名称 获取值
    console.log(person[attrName])
}
// 1. 获取属性名称
var attrNames = Object.getOwnPropertyNames(person)
for (var i = 0; i < attrNames.length; i++) {
    var attrName = attrNames[i]
    // 通过属性名称 获取值
    console.log(person[attrName])
}