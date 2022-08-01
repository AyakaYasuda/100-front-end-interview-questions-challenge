/*

What are two different way to access properties in a object?
- They are dod notation and bracket notation. In case of using bracket notation, you pass key as a string in a bracket.
- Bracket notation doesn't matter if there's truly the property in the object.

*/

const user = {
  firstName: 'Dylan',
  middleName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God',
};

console.log(user.firstName + ' ' + user.lastName);
console.log(user['firstName']);

for (let property in user) {
  console.log(user[property]);
}
