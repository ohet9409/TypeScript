"use strict";
var _a;
console.log(Symbol('foo') === Symbol("foo")); // fasle
// 고유한 값 생성
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]);
