/*

What's a closure?
- A closure is a function having access to the parent scope, even after the parent function has closed.

Why is it powerful?
- A closure makes it possible for a function to have "private" variables.

*/

// Functions can access to variables defined outside of the function, which might cause the change of the counter.
let counter = 0;

function add1() {
  counter++;

  return counter;
}

console.log(add1());
counter = 2;
console.log(add1());
console.log(add1());

// So the counter should be LOCAL to the add() function.
const add2 = function () {
  let counter = 0;

  return function () {
    counter++;

    return counter;
  };
};

const counterFunc = add2();

console.log(counterFunc());
console.log(counterFunc());
console.log(counterFunc());

// another example
function fnA() {
  var name = 'John';
  console.log('parent scope', name);

  function fnB() {
    console.log(name);
  }

  return fnB;
}

const myFunc = fnA(); // execute funA() just once here and it has closed and name variable had gone
myFunc(); // execute only fnB() but fnB remembers what name is since lexical scoping uses the location where a variable name is declared.
myFunc();
myFunc();
