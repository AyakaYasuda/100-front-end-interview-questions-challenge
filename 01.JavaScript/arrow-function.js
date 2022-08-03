/*

What's an arrow function?
- An arrow function is a feature added to ES6.
- It's a short way to white function expressions eliminating a function keyword and also eliminating return keyword as well if the function is a single statement.
- Arrow functions don't have their own bindings to this. In that way, they can't be used for defining object methods. Instead of binding this, this is bound lexically.

*/

function example(param1) {
  return param1 + 1;
}

const example2 = (param1) => {
  return param1 + 1;
};

const example3 = (param1) => param1 + 1;

console.log(example(1));
console.log(example2(1));
console.log(example3(1));


const user = {
  firstName: 'Dylan',
  lastName: 'Israel',
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.fullName()); // undefined undefined
