/*

What does typeof operator do?
- Typeof operator tells you a type of a value you passed in.

*/

// number
console.log(typeof 37 === 'number');
console.log(typeof NaN === 'number');

// string
console.log(typeof `template literal` === 'string');
console.log(typeof '1' === 'string');

// boolean
console.log(typeof true === 'boolean');

// undefined
console.log(typeof undefined === 'undefined');

// object
console.log(typeof {
  a: 1
} === 'object');

console.log(typeof [1, 2, 4] === 'object');
console.log(Array.isArray([1, 2, 4])); // true
console.log(Array.isArray({})); // false

console.log(typeof new Date() === 'object');
console.log(typeof /regex/ === 'object');
console.log(null instanceof Object);
console.log(typeof null);
console.log({} instanceof
    Object);

console.log(typeof
function () {} === 'function');
console.log(typeof Math.sin === 'function');
