/*

What are the ways to select DOM elements using vanilla JS?

*/

console.log(document.getElementById('id-example'));
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByClassName('some-class'));
console.log(document.querySelector('h1.some-class')); // get the first one
console.log(document.querySelectorAll('h1.some-class'));
