//开启全局严格模式
'use strict'
var obj = {}
//将悐变成不可扩展的
Object.preventExtensions(obj)
//为对象扩展属性
obj.name = '一碗周' // 抛出异常
