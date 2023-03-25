// console.log("Hello world");

const helpers = require('./helpers');
const moreHelpers = require('./moreHelpers');

// console.log(helpers);
// console.log(helpers.name);
// console.log(helpers.sayHi());

// const {name, sayHi()} = require('./helpers');
// console.log(name);  // Elozino
// console.log(sayHi); // Hi undefined

console.log(moreHelpers.sayHello());
console.log(moreHelpers.sayGoodbye());
console.log(moreHelpers.firstName);

const heavy = require('../heavy');
console.log(heavy.file1);

