let foo;
console.log(foo); // undefined

const obj = {};
console.log(obj.아무속성); // undefined

let bar = null;
// console.log(bar); // 에러 발생
console.log(null); // null

// 주의할 것
console.log(null == undefined); // true
console.log(null === undefined); // false

