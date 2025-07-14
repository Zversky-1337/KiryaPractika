const arr1 = [-1, 0, 3, 5, 9, 12];

function binarySerch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let midleNum = Math.floor((left + right) / 2);
    if (num < arr[midleNum]) {
      right = midleNum - 1;
    } else if (num > arr[midleNum]) {
      left = midleNum + 1;
    } else if (num === arr[midleNum]) {
      return midleNum;
    }
  }
  return -1;
}

console.log(binarySerch(arr1, 12));
