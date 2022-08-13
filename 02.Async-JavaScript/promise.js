/*

What are a promise?

- A promise is an object returned by an asynchronous function, which allows you to write asynchronous program more easily and readable.
- A Promise can be one of three states: pending, fulfilled, rejected.
- A Promise takes a callback function and it takes tho parameters: resolve and reject
- When a promise is fulfilled, resolve is executed and the code inside then is executed.
- When something wrong happens and a promise is rejected, reject is executed and the code inside catch is executed.

*/

new Promise((resolve, reject) => {
  resolve('hello');
  reject('something wrong happened');
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('finally'));

// You can also call an asynchronous function in the callback
new Promise((resolve) => {
  console.log('Promise');
  setTimeout(() => {
    resolve('hello');
  }, 1000);
})
  .then((data) => {
    console.log('then 1 - ', data);
    return data;
  })
  .then((data) => {
    console.log('then 2 - ', data);
    throw new Error('oops');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('finally');
  });

console.log('global end');

// Promise
// global end
// then 1 - hello
// then 2 - hello
// finally
