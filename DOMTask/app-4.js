// TODO: Найти элементы
const itemInput = document.getElementById("item-input"); // найти поле ввода
const addBtn = document.getElementById("add-btn"); // найти кнопку добавления
const shoppingList = document.getElementById("shopping-list"); // найти список ul

function addItem() {
  const text = itemInput.value.trim();
  if (text === "") {
    itemInput.value = "";
    return;
  }

  const liElement = document.createElement("li");
  liElement.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";

  deleteBtn.addEventListener("click", () => removeItem(liElement));

  liElement.appendChild(deleteBtn);

  shoppingList.appendChild(liElement);

  itemInput.value = "";
}

function removeItem(listItem) {
  listItem.remove();
}

addBtn.addEventListener("click", addItem);

itemInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

// TODO: Создать функцию addItem()
// Получить текст из поля ввода
// Создать новый элемент li с текстом и кнопкой "Удалить"
// Добавить li в список
// Очистить поле ввода

// TODO: Создать функцию removeItem(listItem)
// Удалить переданный элемент из списка

// TODO: Добавить обработчик клика на кнопку "Добавить"

// TODO: Добавить обработчик нажатия Enter в поле ввода

console.log("Список покупок готов");
