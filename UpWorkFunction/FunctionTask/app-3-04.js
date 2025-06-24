function makePrefixer(prefix) {
  return function (name) {
    prefix += 'L'
    return console.log(prefix, name);
  };
}

const helloPrefix = makePrefixer("Hello,");
helloPrefix("John"); // "Hello, John"
helloPrefix("John"); // "HelloL, John"
helloPrefix("John"); // "HelloL:, John"
helloPrefix("John"); // "HelloL, John"

// Все файн 😄