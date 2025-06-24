const arr = [];
function mockRequest(name) {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Усепешно: ${name}`);
    }, Math.floor(Math.random() * 3 + 1) * 1000);
  });
  return promise;
}

Promise.all([
  mockRequest("Запрос 1"),
  mockRequest("Запрос 2"),
  mockRequest("Запрос 3"),
  mockRequest("Запрос 4"),
  mockRequest("Запрос 5"),
]).then((names) => {
  console.log("Все запросы завершены:");
  names.forEach((name) => console.log(name));
});
