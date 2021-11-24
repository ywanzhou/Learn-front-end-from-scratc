'use strict'

var obj = {}
Object.defineProperty(obj, 'name', {
  value: '一碗粥',
})
obj.name = '一碗周' //抛出异常
