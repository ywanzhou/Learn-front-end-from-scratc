function MyError(message) {
  this.message = message
  this.name = 'MyError'
  /*
   * Error.captureStackTrace(targetObject[, constructorOpt])
   * 参数 targetObject -> 表示一个对象
   * 参数 constructorOpt -> 表示对象的构造函数
   * 在targetObject上创建一个.stack属性， 调用是返回一个调用 Error.captureStackTrace() 的位置的字符串。
   */
  Error.captureStackTrace(this, MyError)
}

MyError.prototype = new Error
MyError.prototype.constructor = MyError


// * 在node.js 环境中 new Error 会直接抛出异常 不适用于 node.js环境
// function MyError(message) {
//   this.name = 'MyError';
//   this.message = message || 'Default Message';
//   this.stack = (new Error()).stack;
// }
// MyError.prototype = Object.create(Error.prototype);
// MyError.prototype.constructor = MyError;

try {
  throw new MyError('错了');
} catch (e) {
  console.log(e);
}