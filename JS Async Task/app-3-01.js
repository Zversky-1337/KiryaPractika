// function fetchWithAbort() {
//   console.log("Запрос отправлен");
//   let controller = new AbortController();
//   setTimeout(() => {
//     controller.abort();
//     console.log("Отмена запроса инициирована");
//   }, 100);
//   try {
//     let response = fetch("https://jsonplaceholder.typicode.com/users", {
//       signal: controller.signal,
//     });
//     const responseJson = response.json();
//     return console.log("Данные получены:", responseJson);
//   } catch (err) {
//     if (err.name === "AbortError") {
//       console.log("Запрос был отменён!");
//     } else {
//       console.log("Ошибка:", err.message);
//     }
//   }
// }

// fetchWithAbort(); // тут я сдался

async function fetchWithAbort() {
  console.log("Запрос отправлен");

  const controller = new AbortController();
  const signal = controller.signal;

  // Планируем отмену через 100 мс
  setTimeout(() => {
    controller.abort();
    console.log("Отмена запроса инициирована");
  }, 100);

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal: signal,
    });
    const data = await response.json();
    console.log("Данные получены:", data);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Запрос был отменён!");
    } else {
      console.log("Ошибка:", err.message);
    }
  }
}

fetchWithAbort();
