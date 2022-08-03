/*

What's destructuring of an array or an object ?

- It allows us to unpack values from arrays or properties from objects into distinct variables.
- It's useful to make code a little bit more cleaner.
- We can also assign an alias to call the variable in a different way.

*/

const [month, day, year] = [10, 25, 1987];
console.log(`${month}/${day}/${year}`);

let { firstName: fn, nickName } = {
  firstName: 'Dylan',
  middleName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God',
};

console.log(fn);
console.log(nickName);
