/*

What does delete keyword do?
- Delete keyword allows us to delete a property of an object. Not a value but a property itself.
- It could break a data model in the app, that's why it's typically avoided to use.

*/

const user = {
  firstName: 'Dylan',
  middleName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God',
};
const response = delete user.firstName;
console.log(response);
console.log(user);
