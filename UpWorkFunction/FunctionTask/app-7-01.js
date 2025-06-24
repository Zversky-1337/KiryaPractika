function printNumbers(from, to) {
  let count = 1;

  setTimeout(() => {
    const intrvalId = setInterval(() => {
      return console.log(count++);
    }, 1000);

    setTimeout(() => {
      clearInterval(intrvalId);
    }, to - from);
  }, from);
}

printNumbers(5000, 10000);


// function printNumbersWithTimeout(from, to) {
//   let count = 1;
//   let timerId;
//   setTimeout(function start() {
//     timerId = setTimeout(function newNumbers() {
//       console.log(count++);
//       timerId = setTimeout(newNumbers, 1000);
//     }, 0);
//     setTimeout(() => {
//       clearTimeout(timerId);
//     }, to - from);
//   }, from);
// }
//
// printNumbersWithTimeout(5000, 10000);


function printNumbersWithInterval(from, to) {
    const intervalId = setInterval(() => {
        if (from <= to) {
            console.log(from++);
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

// printNumbersWithInterval(1, 10);

function printNumbersWithTimeout(from, to) {
    function print() {
        if (from <= to) {
            console.log(from++);
            setTimeout(print, 1000);
        }
    }

    print();
}


// printNumbersWithTimeout(1, 10)