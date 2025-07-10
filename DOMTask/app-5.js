// TODO: Найти все элементы
const num1Input = document.getElementById("num1"); // первое число
const num2Input = document.getElementById("num2"); // второе число
const operationSelect = document.getElementById("operation"); // операция
const calculateBtn = document.getElementById("calculate"); // кнопка вычисления
const resultDiv = document.getElementById("result"); // результат

function calculate() {
  const number1 = num1Input.value.trim();
  const number2 = num2Input.value.trim();

  let result = 0;

  switch (operationSelect.value) {
    case "+":
      result = +number1 + +number2;
      break;
    case "-":
      result = +number1 - +number2;
      break;
    case "*":
      result = +number1 * +number2;
      break;
    case "/":
      result = +number1 / +number2;
      break;
    default:
      resultDiv.textContent = "Иди нахуй!!!";
      return;
  }

  if (number1 === "" || number2 === "") {
    resultDiv.textContent = "Слышь мразь 2 числа ввел или я тебя ебну!!!";
    return;
  }

  if (operationSelect.value === "/" && +number2 === 0) {
    resultDiv.textContent = "Not a car, but infinity";
    return;
  }

  resultDiv.textContent = result;
}

calculateBtn.addEventListener("click", calculate);

addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculate();
  }
});

// TODO: Создать функцию calculate()
// Получить значения из полей ввода
// Получить выбранную операцию
// Выполнить вычисление с помощью switch или if
// Показать результат в resultDiv

// TODO: Добавить обработчик клика на кнопку

// TODO: Добавить обработчик Enter на полях ввода

console.log("Калькулятор готов");
