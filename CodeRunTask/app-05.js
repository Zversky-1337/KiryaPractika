const arr = [1, 1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7, 7, 8, 9, 9, 9];

function withoutRepeat(array) {
  const newArr = [];
  const map = new Map();

  array.forEach((num) => {
    if (map.has(num)) {
      let count = map.get(num) + 1;
      map.set(num, count);
    } else {
      map.set(num, 1);
    }
  });

  map.forEach((value, key) => {
    if (value === 1) {
      newArr.push(key);
    }
  });
  return newArr;
}

console.log(withoutRepeat(arr));
