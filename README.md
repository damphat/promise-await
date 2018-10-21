# promise-await (for nodejs, C++ required)

## Description

Inject method promise.await(), convert async to sync function.

- `.await()` is a blocking method
- `.await()` return the value if the promise is resolved
- `.await()` throw the error if the promise is rejected

## Warning

- `.await()` is blocking method. It is useful for `REPL`, learning API, writing terminal tools
- If you don't known what is blocking method, don't use this package

## Examples

```js
// inject promise.await() method
require("promise-await");

// create some promises or async functions
var promise1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("the value"), 1000)
);

var promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("the reason"), 1000)
);

async function asyncMethod() {
  // await ...
  // await ...
}

promise1.await(); // return "the value" after 1 second
promise2.await(); // throws "the reason" after 1 second

asyncMethod().await(); // block and return the result or throw the error

```

## Licence

MIT
