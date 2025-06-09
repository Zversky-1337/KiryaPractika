function unique(arr) {
  const set = new Set(arr);

  return [...set];
}

const result = unique([1, 2, 3, 1, 2, 4]);

console.log(result);
