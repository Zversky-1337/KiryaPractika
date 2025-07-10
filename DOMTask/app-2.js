// TODO: Найти все кнопки с классом "color-btn"
const colorButtons = document.querySelectorAll(".color-btn"); // найти все элементы с классом "color-btn"
const defaultBtn = document.getElementById("default-color"); // найти кнопку "По умолчанию"

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;
    document.body.style.background = color;
  });
});

defaultBtn.addEventListener("click", () => {
  document.body.style.background = "";
});

// TODO: Добавить обработчик клика для каждой цветной кнопки
// Использовать forEach для перебора кнопок
// При клике менять background цвет body на значение из data-color

// TODO: Добавить обработчик для кнопки "По умолчанию"
// При клике убирать цвет фона (пустая строка)

console.log("Смена цветов готова");
