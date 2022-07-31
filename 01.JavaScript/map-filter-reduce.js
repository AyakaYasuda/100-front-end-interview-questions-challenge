/*

What are map(), filter(), reduce() for?
- These are array methods to help you create a new array in a various way instead of modifying the original array.
- map() method creates a new array by performing a function on each array element.
- filter() method creates a new array with array that passes a test.
- reduce() method runs a function on each array element to produce a single value. And it can accept an initial value. Accumulator that reduce() method take as the first argument is tracking previous values.

*/

const prices = [1, 2, 3, 10, 20, 30];

const mapExample = prices.map((value) => value + 1);
const filterExample = prices.filter((value) => value < 10);
const reduceExample = prices.reduce((total, current) => {
  return (total += current);
}, 0);

const reduceArrayExample = prices.reduce((accumulator, value) => {
  const newValue = value + 1;

  if (newValue <= 20) {
    accumulator.push(newValue);
  }

  return accumulator;
}, []);

console.log(prices);
console.log(mapExample);
console.log(filterExample);
console.log(reduceExample);
console.log(reduceArrayExample);
