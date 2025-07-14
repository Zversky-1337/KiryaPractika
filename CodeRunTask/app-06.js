// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myFilter = function (func) {
//   const newArr = [];
//   this.forEach((e) => {
//     if (!func(e)) {
//       newArr.push(e);
//     }
//   });
//   return newArr;
// };

// const res = arr.myFilter((item) => item % 2);

// console.log(res);

const onInput = debounse(() => console.log("Hi"), 2000);

function debounse(callback, ms) {
  return function () {
    setTimeout(callback, ms);
  };
}
onInput();
