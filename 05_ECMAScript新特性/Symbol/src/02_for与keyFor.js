let myName = Symbol.for("myName");
let object = {
  [myName]: "一碗周"
};

console.log(object[myName]);       // "一碗周"
console.log(myName);               // "Symbol(myName)"

let myName2 = Symbol.for("myName");

// 这里的相等是因为 myName2 的 Symbol.for("myName") 已经是创建好的。myName 和 myName2 指向的是同一块内存地址
console.log(myName === myName2);      // true


console.log(object[myName2]);      // "一碗周"
console.log(myName2);              // "Symbol(myName)"


// keyFor用于读取，未读取到返回undefined

console.log(Symbol.keyFor(myName));    // "myName"

console.log(Symbol.keyFor(myName2));   // "myName"

let myName3 = Symbol("myName");

console.log(Symbol.keyFor(myName3));   // undefined
