/*

What is coercion?
- Coercion is the implicit conversion of values from one data type to another.
- There're also several ways to explicitly coerce values.

*/

const total = 2 + 3 + '7';
// JS coerced the 5 from a number into a string then concatenated two values together, resulting in 57.
console.log(total); // => 57
console.log(typeof total); // string

// explicit coercion
console.log(typeof String(5)); // string
console.log(typeof Boolean(0)); // boolean
console.log(typeof Number('5')); // number
