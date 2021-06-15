"use strict";
function returnAny(message) {
    console.log(message);
}
var any1 = returnAny("리턴은 아무거나");
console.log(any1);
// any 전파 예제
// let looselyTyped: any = {};
// let d = looselyTyped.a.b.c.d;
// console.log(d); 
function leakingAny(obj) {
    var a = obj.num;
    var b = a + 1;
    return b;
}
var c = leakingAny({ num: 0 });
console.log(c);
var d1 = c.indexOf("0");
console.log(d1);
