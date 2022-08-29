/*

- const and let were introduced in ES6.
- The issue that they were trying to solve was that var was using lexical scope and it was causing variable hoisting.
- const and let use block scope.

=== let ===
1. cannot be re-declared
2. must be declared before use
3. have block scope

=== const ===
1. cannot be re-declared
2. cannot be re-assigned: used for defining constants
3. have block scope

*/

// << example 1 - how block scope works in lexical environment >>
var apple = 'global apple'; // variable env
let banana = 'global banana'; // lexical env

{
  let banana = 'block banana'; // lexical env / block scope
  const orange = 'block orange'; // lexical env / block scope
  var grape = 'global grape'; // variable env / global scope
  console.log(apple); // => global apple
  console.log(banana); // => block banana: At this point, the block scope is removed from the lexical env.
}

function myFunc() {
  var strawberry = 'func strawberry'; // function scope
}

// console.log(banana); // => global banana: can't access inside the block since it's removed.
// console.log(orange); // => orange is not defined
// console.log(grape); // => global grape: a variable defined with var can be accessed from outside the block
// console.log(strawberry); // => strawberry is not defined: a variable declared inside the function can't be accessed from outside.

// << example 2 - deference between let/const and var >>

function example() {
  if (true) {
    let ex = 5;
  }

  return ex; // => ex is not defined: can't be accessed inside the block
}
console.log(example());

// function example() {
//   var ex; // => undefined
//   if (false) {
//     ex = 5;
//   }

//   return ex;
// }
// console.log(example());
// if false, undefined will be returned
// if true, 5 will be returned

// << example 3 - features of const: can't be re-assigned >>

// const conEx = 5;
// conEx++; // => error: primitive values can't be modified

// non-primitive values can be modified even if they are constants
const conEx2 = [];
conEx2.push(2);
console.log(conEx2);

const conEx3 = {};
conEx3.name = 'Dylan';
console.log(conEx3);
