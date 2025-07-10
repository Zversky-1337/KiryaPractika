// TODO: Найти кнопку и блок текста
const toggleBtn = document.getElementById("toggle-btn"); // найти кнопку
const textBlock = document.getElementById("text-block"); // найти блок текста

let isVisible = false;

toggleBtn.addEventListener("click", () => {
  isVisible = !isVisible;
  if (isVisible) {
    textBlock.style.display = "block";
    toggleBtn.textContent = "Скрыть текст";
  } else {
    textBlock.style.display = "none";
    toggleBtn.textContent = "Показать текст";
  }
});

// TODO: Добавить обработчик клика на кнопку
// Если текст скрыт - показать и изменить текст кнопки на "Скрыть текст"
// Если текст показан - скрыть и изменить текст кнопки на "Показать текст"
// Использовать style.display = 'block' для показа и 'none' для скрытия

console.log("Переключатель готов");

// версия Чата ГПТ
// const toggleBtn = document.getElementById("toggle-btn");
// const textBlock = document.getElementById("text-block");

// toggleBtn.addEventListener("click", () => {
//   const isHidden = textBlock.style.display === "none";

//   textBlock.style.display = isHidden ? "block" : "none";
//   toggleBtn.textContent = isHidden ? "Скрыть текст" : "Показать текст";
// });

// console.log("Переключатель готов");
