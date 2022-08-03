/*

How do you copy an object?
- There are a couple different ways to do it
    1. stringify the object and parse it back into a new object.
    2. create a new object and use a spread operator to unpack the object into a new object.
    3. iterate through each one of those properties of the object and add the value of the property to a new object.

*/

const user = {
  firstName: 'Dylan',
  middleName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God',
};
const user2 = user;
const user3 = JSON.parse(JSON.stringify(user));
const user4 = {
  ...user,
};

const copyObj = (user) => {
  let copyUser = {};
  for (let property in user) {
    console.log(property);
    copyUser[property] = user[property];
  }
  return copyUser;
};
const user5 = copyObj(user);

console.log(Object.is(user, user5));
console.log(Object.is(user, user4));
console.log(Object.is(user, user3));
console.log(Object.is(user, user2));
