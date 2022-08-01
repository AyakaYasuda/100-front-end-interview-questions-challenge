/*

What's the difference between double equals and triple equals?
- Double equals just check the value and triple equals are stricter and check data type as well.
- Stricter avoids bugs in apps.

*/

const example1 = 5;
const example2 = '5';

// eslint-disable-next-line eqeqeq
console.log(example1 == example2); // => true
console.log(example1 === example2); // => false
