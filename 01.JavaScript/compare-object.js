/*

How do you compare two objects?
- It depends on how complex the object is.
- If it's a simple non-nested object, I'll stringify each object and make a comparison using an equal operator.
- If it's a complex nested object, I'll make a function called isSameObject returning a boolean value. In that function, I'll retrieve properties from each object, and the first thing to do is to compare the length of each array of properties. If it's not the same, the function returns false. The next thing to do is to iterate through the properties of one of the object and compare the value of the property with the other object. If the function detects not-matching value, it returns false. 

*/

const user1 = {
  first: 'Dylan',
  last: 'Israel',
};
const user2 = {
  first: 'Dylan',
  last: 'Israel',
};

const stringUser1 = JSON.stringify(user1);
const stringUser2 = JSON.stringify(user2);
console.log(stringUser1 === stringUser2);

function isSameObject(obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1);
  const props2 = Object.getOwnPropertyNames(obj2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i++) {
    const property = props1[i];
    if (props1[property] !== props2[property]) {
      return false;
    }
  }

  return true;
}

console.log(isSameObject(user1, user2));
