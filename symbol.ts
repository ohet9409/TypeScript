console.log(Symbol('foo') === Symbol("foo")); // fasle

// 고유한 값 생성
const sym = Symbol();

const obj = {
  [sym]: "value"
}
console.log(obj[sym]);