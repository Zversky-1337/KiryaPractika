function makePrefixer(prefix) {
  return function (name) {
    return console.log(prefix, name);
  };
}

const helloPrefix = makePrefixer("Hello, ");
helloPrefix("John"); // "Hello, John"
