// console.log("Hello world");

const helpers = require('./helpers');

console.log(helpers);
console.log(helpers.name);
console.log(helpers.sayHi());

const {name, sayHi()} = require('./helpers');
console.log(name);  // Elozino
console.log(sayHi); // Hi undefined
