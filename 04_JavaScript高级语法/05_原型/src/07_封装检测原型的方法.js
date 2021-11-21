function DetectionAttributes(obj, attr) {
  if (attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      // 如果是自有属性属性返回1
      return 1
    } else {
      // 如果是原型属性返回0
      return 0
    }
  } else {
    // 没有这个属性返回 -1
    return -1
  }
}
