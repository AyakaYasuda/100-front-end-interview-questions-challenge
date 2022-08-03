/*

What's the difference between undeclared and undefined?
- Undeclared means that the variable doesn't exist, whereas undefined means that the variable exists but it doesn't have a value. Or, if it's an object, there's not a property in it.

*/

const user = {};

let example;

console.log(user.firstName); // undefined
console.log(example); // undefined

console.log(example2); // syntax error: undeclared
