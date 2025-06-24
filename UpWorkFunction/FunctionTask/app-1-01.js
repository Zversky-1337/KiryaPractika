// С использованием цикла

const sumToLoop = (n) => {
  let num = 0;
  for (let i = 0; i <= n; i++) {
    num += i;
  }
  return num;
};

console.log(sumToLoop(100));

// Через Рекурсию

const sumToRecursion = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n + sumToRecursion(n - 1);
  }
};

console.log(sumToRecursion(2));

// Через формулу арифметической прогрессии

const sumToBProgression = (n) => {
  return (n / 2) * (n + 1);
};

console.log(sumToBProgression(100));

// Все файн 😄