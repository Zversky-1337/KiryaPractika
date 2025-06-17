function createCounter() {
  let count = 0;
  return function () {
    count++;
    return console.log(count);
  };
}

const counter = createCounter();
const secCounter = createCounter();
counter(); // 1
counter(); // 2
secCounter(); // 1
secCounter(); // 2
