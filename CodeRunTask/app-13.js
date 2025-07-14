function uniqueValues(arr) {
  const set = new Set();

  arr.forEach((element) => {
    set.add(element);
  });

  return [...set];
}

console.log(uniqueValues([1, 2, 3, 4, 4, 4, 5, 6, 6, 98, 12]));

console.log(uniqueValues(["apple", "orange", "apple", "banana"]));
