/*

What is NaN?
- NaN stands for Not a Number, which indicates that a number is not a legal number.
- You'll get NaN when you are trying to do arithmetic with non-numeric string or divide 0 by 0.

*/

console.log(0 / 0);
console.log(parseInt('hellos'));
console.log(typeof NaN); // number
console.log(isNaN(NaN));
