/*

What is an anonymous function?
- We can define functions using declaration and expression, and anonymous functions are used in function expression.
- It's a function that doesn't have a name of a function. It's stored in a variable and invoked using the variable name.

*/

// function declaration
function add(num1, num2) {
  return num1 + num2;
}
console.log(add);
console.log(add(5, 5));

// function expression
const add2 = function (num1, num2) {
  return num1 + num2;
};

console.log(add2(5, 6));
