// TODO: Найти элементы формы
const form = document.getElementById("contact-form"); // форма
const nameInput = document.getElementById("name"); // поле имени
const emailInput = document.getElementById("email"); // поле email
const messageInput = document.getElementById("message"); // поле сообщения
const formResult = document.getElementById("form-result"); // результат отправки
const messageError = document.getElementById("message-error");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateForm() {
  clearErrors();

  if (!nameInput.value.trim()) {
    showError(messageError, "Введите имя");
    return false;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    showError(messageError, "Введите корректный email");
    return false;
  }

  if (!messageInput.value.trim()) {
    showError(messageError, "Введите сообщение");
    return false;
  }

  return true;
}

function showError(fieldName, message) {
  fieldName.textContent = message;
}

function clearErrors() {
  messageError.textContent = "";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    formResult.textContent = `${nameInput.value}\n${emailInput.value}\n${messageInput.value}`;
    form.reset();
  }
});

// TODO: Создать функцию validateForm()
// Проверить, что все поля заполнены
// Проверить корректность email
// Вернуть true/false

// TODO: Создать функцию showError(fieldName, message)
// Показать ошибку рядом с полем

// TODO: Создать функцию clearErrors()
// Очистить все сообщения об ошибках

// TODO: Добавить обработчик submit для формы
// Предотвратить стандартную отправку
// Валидировать форму
// Показать результат

console.log("Форма готова");
