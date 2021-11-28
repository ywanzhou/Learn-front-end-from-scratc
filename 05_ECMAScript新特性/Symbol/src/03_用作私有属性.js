function getObj () {
  const myName = Symbol('name');
  const obj = {};
  obj[myName] = '一碗周';
  return obj;
}

const obj = getObj();

Object.keys(obj); // []

// 除非有这个 symbol 的引用，否则无法访问该属性
obj[Symbol('name')]; // undefined

