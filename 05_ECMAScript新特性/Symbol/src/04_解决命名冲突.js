const cache = {}
// a.js
cache['foo'] = 123
// b.js
cache['foo'] = 234

console.log(cache) // { foo: 234 }
// ==============================================
// a.js
cache['a_foo'] = 123
// b.js
cache['b_foo'] = 234

console.log(cache) // { foo: 234, a_foo: 123, b_foo: 234 }