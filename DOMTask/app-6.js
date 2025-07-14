// TODO: Найти элементы
const galleryImage = document.getElementById("gallery-image"); // изображение
const prevBtn = document.getElementById("prev-btn"); // кнопка назад
const nextBtn = document.getElementById("next-btn"); // кнопка вперед
const imageCounter = document.getElementById("image-counter"); // счетчик

// TODO: Создать массив URL изображений

function main() {
  // Инициализация галереи
  galleryImage.src = images[0];
}

// Почему по умолчнаю нет картнки 🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡
const images = [
  "https://picsum.photos/300/200?random=1",
  "https://picsum.photos/300/200?random=2",
  "https://picsum.photos/300/200?random=3",
  "https://picsum.photos/300/200?random=4",
  "https://picsum.photos/300/200?random=5",
  // добавить еще 4 URL
];

let currentIndex = 0;

function updateImage() {
  galleryImage.src = images[currentIndex];
  imageCounter.textContent = `${currentIndex + 1} из 5`;
}

function showNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;

    updateImage();
  }
}

function showPrevious() {
  if (currentIndex > 0) {
    currentIndex--;

    updateImage();
  }
}

nextBtn.addEventListener("click", showNext);

prevBtn.addEventListener("click", showPrevious);

// TODO: Создать функцию updateImage()
// Менять src изображения на images[currentIndex]
// Обновлять счетчик

// TODO: Создать функцию showNext()
// Увеличивать currentIndex (с проверкой границ)
// Вызывать updateImage()

// TODO: Создать функцию showPrevious()
// Уменьшать currentIndex (с проверкой границ)
// Вызывать updateImage()

// TODO: Добавить обработчики кликов

console.log("Галерея готова");

main()
