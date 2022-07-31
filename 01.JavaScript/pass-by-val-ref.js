/*

What's the difference between pass-by-value and pass-by-reference?
- Pass-by-value creates a new space in memory and makes a copy of a value, whereas pass-by-reference does not.
- Instead of making a copy, in case of pass-by-reference, a value in memory will be referenced. 

*/

// << example of pass-by-value: primitive type >>
let example1 = 1;
let example2 = example1;
example2++;
console.log(example1, ' - ', example2);

// << example of pass-by-reference: non-primitive type >>
const example3 = [];
const example4 = example3; // example 4 is not a copy of example3, just referencing example3
example4.push('ref');
console.log(example3, ' - ', example4); // ['ref'] ' - ' ['ref']

// how to duplicate a non-primitive value
const example5 = {
  channel: 'YouTube',
};
const example6 = {
  ...example5,
};
example4.name = 'Dylan Israel';
console.log(example5, ' - ', example6);
