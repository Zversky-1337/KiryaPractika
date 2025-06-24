function square(num) {
  if (typeof num !== "number") {
    const errorMessage = "Вы ввели не число";
    throw new Error(errorMessage);
  }
  return num * num;
}
//
try {
  // попробуй вызвать с числом и строкой
  // console.log("Результат:", square(4));
  console.log("Результат:", square("abc"));
} catch (error) {
  console.log("Ошибка:", error.message);
}

// Все файн 😄

