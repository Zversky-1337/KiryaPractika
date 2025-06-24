function createCounter() {
  let count = 0;

  function func () {
    count++;
    return console.log(count);
  };

  return func
}

const counter = createCounter();
counter(); // 1
counter(); // 2


function createCounter2() {
  let count = 0;

  function func () {
    count++;
    return console.log(count);
  };

  func()
}

createCounter2() // 1
createCounter2() // 1
createCounter2() // 1
createCounter2() // 1
createCounter2() // 1


// Все файн 😄