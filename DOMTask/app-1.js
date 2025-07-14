const counterDisplay = document.getElementById("counter"); // найти элемент с id="counter"
const incrementBtn = document.getElementById("increment"); // найти кнопку "+1"
const resetBtn = document.getElementById("reset"); // найти кнопку "Сброс"

let count = 0;

function render() {
  counterDisplay.textContent = count;
}

incrementBtn.addEventListener("click", () => {
  count++;
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

// TODO: Добавить обработчик клика для кнопки "+1"
// При клике увеличивать count на 1 и обновлять текст

// TODO: Добавить обработчик клика для кнопки "Сброс"
// При клике обнулять count и обновлять текст

console.log(`Счетчик готов`);
