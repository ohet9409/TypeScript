"use strict";
// create by object literal
var person1 = { name: "Mark", age: 29 };
console.log(person1);
// person1 is not "object" type
// person1 is "{name: string, age: number}" type
// create by Object.create
var person2 = Object.create({ name: 'Mark', age: 33 });
console.log(person2.name);
