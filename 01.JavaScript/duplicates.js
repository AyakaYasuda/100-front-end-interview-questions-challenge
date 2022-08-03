/*

How do you remove duplicates from an array?
- The simplest way is to unwrap those values into a set which doesn't include duplicates.
- For some reasons, if you don't want to use a set, you can iterate through the array and see if the value is new in the new returning array. If the value is already in the array, ignore it.

*/

const nums = [1, 1, 2, 2, 3, 3, 3];

// #1
const numSet = new Set();

nums.forEach((value) => numSet.add(value));

console.log(numSet);

// #2
let singleValueArr = [];

nums.forEach((value) => {
  if (!singleValueArr.includes(value)) {
    singleValueArr.push(value);
  }
});

console.log(singleValueArr);
