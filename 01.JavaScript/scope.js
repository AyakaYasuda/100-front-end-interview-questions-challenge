/*
- Scope determines the accessibility of variables.
- JavaScript has 3 types of scope:
    1. Block scope
    2. Function scope
    3. Global scope
- Before ES6, JavaScript had only Function scope and Global scope.
*/

// << Block scope >>
// Variables declared inside a {} block cannot be accessed from outside the block.
{
  let x = 2;
}
console.log(x);

{
  var x = 3;
}
console.log(x);

// << Function score >>
// Variables declared within a JavaScript function, become LOCAL to the function, which means local variables have function scope: They can only be accessed from within the function.
// Variables declared with var, let and const are quite similar when declared inside a function.
// They all have function scope.
function myFunc() {
  let carName = 'volvo';
}

function myFunc() {
  const carName = 'volvo';
}

function myFunc() {
  var carName = 'volvo';
}

// << Global scope >>
// Variables declared outside functions become GLOBAL, which means global variables have global scope.
// Global variables can be accessed from anywhere from JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block.
// They all have global scope.

var x = 2;
let y = 3;
const z = 4;
