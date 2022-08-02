/*

What is an IIFE?
- IIFE stands for "Immediately Invoked Function Expression"
- It's basically an anonymous function that runs as soon as it is defined.

When do we need to use an IIFE?
- One of the common use cases is to restrict the scope of variables to local so that they don't pollute the global context.
- Another one is to protect private variables combining with closures.

*/

// testing if it's invoked immediately
(function () {
  console.log('invoked');
})();

// It's useful to have initialization logic fire off immediately.
const result = (function () {
  const init = {
    id: 0,
    methods: {
      call() {},
    },
  };

  return init;
})();

console.log(result);
