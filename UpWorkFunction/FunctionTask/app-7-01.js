// function printNumbers(from, to) {
//   let count = 1;

//   setTimeout(() => {
//     const intrvalId = setInterval(() => {
//       return console.log(count++);
//     }, 1000);

//     setTimeout(() => {
//       clearInterval(intrvalId);
//     }, to - from);
//   }, from);
// }

// printNumbers(5000, 10000);

// function printNumbers(from, to) {
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

// printNumbers(5000, 10000);
