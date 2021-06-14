// create by object literal
const person1 = {name: "Mark", age: 29}
console.log(person1)

// person1 is not "object" type
// person1 is "{name: string, age: number}" type

// create by Object.create
const person2 = Object.create({name: 'Mark', age: 33})
console.log(person2.name)

let obj2: object = {};

obj2 = {name: 'Mark'};

obj2 = [{name: 'Mark'}];

// obj2 = 33; // Error

// obj2 = 'Mark'; // Error

// obj2 = true; // Error

// obj2 = 100n; // Error

// obj2 = Symbol(); // Error

// obj2 = null; // Error

// obj2 = undefined; // Error


declare function create(o:Object | null): void;
  
create({ prop: 0});

create(null);

// create(42);  // Error

// create("String"); // Error

// create(false); // Error

// create(undefined); // Error

// // object.create
// Object.create(0); // Error