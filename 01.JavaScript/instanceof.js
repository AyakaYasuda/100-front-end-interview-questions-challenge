/*

What does instanceof operator do?
- The instanceof operator tests to see if an object belongs to a certain class. The return value is a boolean value.

*/

console.log('hello world' instanceof String); // false

class Circle {}
const circle = new Circle();

console.log(circle instanceof Circle); // true
console.log(circle instanceof Object); // true
