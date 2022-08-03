/*

What is a rest operator? What is a spread operator?
- Both of them are features of ES6.
- A rest operator allows us to pass an indefinite number of arguments as an array to a function.
- A spread operator allows us to unpack an arrow or an object and copy all or a part of the existing array of object, which makes it easy to duplicate an new array or object.

*/

// << an example of a rest operator >>
function calcTotal(...nums) {
  console.log(nums); // [5, 6, 7, 8]
  const newNumsArray = [1, 2, 3, 4, ...nums];
  console.log(newNumsArray);

  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

console.log(calcTotal(5, 6, 7, 8));

// << an example of a spread operator >>
function copyUser(obj) {
  const user = {
    ...obj,
  };
  console.log(user);
}

copyUser({
  firstName: 'Dylan',
});
