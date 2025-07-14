const tasks = [
  "Купить чай",
  "Купить чайник",
  "Позвонить бабушке",
  "Сделать чай с лимоном",
  "Выучить JavaScript",
  "чайка Никитича чинити Нику",
  "Чай чайю рознь но Чай ЧАЙКЕ не рознь",
];

function myFilter(arr, keyWord) {
  const lowerKeyWord = keyWord.toLowerCase();
  const newArr = [];

  arr.forEach((text) => {
    const lowerText = text.toLowerCase();

    if (keyWord.toLowerCase() === "чай") {
      const arrayWord = lowerText.split(" ");
      arrayWord.some((word) => {
        if (word === lowerKeyWord) {
          newArr.push(text);
          return true;
        }
      });
    } else if (lowerText.includes(lowerKeyWord)) {
      newArr.push(text);
    }
  });
  return newArr;
}
console.log(myFilter(tasks, "ЧАЙ"));
console.log(myFilter(tasks, "java"));
console.log(myFilter(tasks, "ник"));
