/*

What's a callback?
- A callback is a function passed as an argument to another function.
- Using callbacks, you can control when to execute a function.

When do you use callbacks?
- Where callback functions really shine are in asynchronous functions, where one function has to wait for another function.

*/

const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map(add5);

console.log(arr2);

function add5(val) {
  return val + 5;
}
