/*

What's Hoisting?
- Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope. 

Behavior of variables with let and const
- Variables defined with ler and const are hoisted to the top of the block, but not initialized.

Point
- JavaScript only hoists declarations, not initializations: JavaScript is aware of variables but doesn't know what value is before initialization.

*/

/*
===========
let
===========
*/

carName = 'volvo';
let carName;
// returns "Cannot access "carName" before initialization.

/*
===========
const
===========
*/
carName2 = 'volvo';
const carName2;
// Using const before it's declared, is a syntax error, so this code will not run.