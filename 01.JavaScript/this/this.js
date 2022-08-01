/*

What is this in JavaScript?
- The this keyword refers to an object.
- Which object depends on how this is invoked.

*/


// << example of this alone >>
// this refers to the global object. In a browser, the global object becomes [object Window].
console.log(this); 

// << example of this in an object method >>
// this refers to the exampleObj object.
const exampleObj = {
  first: 'Dylan',
  last: 'Israel',
  fullName () {
    return `${this.first} ${this.last}`;
  }
};

console.log(exampleObj.fullName());
