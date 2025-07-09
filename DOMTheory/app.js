document.addEventListener("DOMContentLoaded", function () {
  // Найти форму
  // Повесить событие на форму, submit

  // Находим список задач
  // Добавим задачу в список

  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const taskList = document.getElementById("todo-list");

  let tasks = [
    { id: 1, text: "First task 1", comleted: false },
    { id: 2, text: "First task 2", comleted: true },
  ];

  renderTasks();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      text: input.value,
      completed: false,
    };

    tasks.push(newTask);

    renderTasks();

    // addTask(input.value);
    input.value = "";
  });

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      addTask(task.text);
    });
  }

  function addTask(newTask) {
    const taskElement = document.createElement("li");

    const taskTextElement = document.createElement("span");

    taskTextElement.textContent = newTask.text;

    if (newTask.comleted) {
      taskTextElement.classList.add("completed");
    }

    const deleteButtonElement = document.createElement("button");

    deleteButtonElement.textContent = "Delete";

    deleteButtonElement.classList.add("delete-btn");

    taskElement.append(taskTextElement);

    taskElement.append(deleteButtonElement);

    taskList.append(taskElement);

    deleteButtonElement.addEventListener("click", () => {
      //   taskElement.remove();

      tasks = tasks.filter((task) => {
        return task.id !== newTask.id;
      });

      renderTasks();
    });

    taskTextElement.addEventListener("click", () => {
      taskTextElement.classList.toggle("completed");
    });
  }
});
