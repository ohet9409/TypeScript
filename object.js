"use strict";
// create by object literal
var person1 = { name: "Mark", age: 29 };
console.log(person1);
// person1 is not "object" type
// person1 is "{name: string, age: number}" type
// create by Object.create
var person2 = Object.create({ name: 'Mark', age: 33 });
console.log(person2.name);
var obj2 = {};
obj2 = { name: 'Mark' };
obj2 = [{ name: 'Mark' }];
create({ prop: 0 });
create(null);
// create(42);  // Error
// create("String"); // Error
// create(false); // Error
// create(undefined); // Error
// // object.create
// Object.create(0); // Error
