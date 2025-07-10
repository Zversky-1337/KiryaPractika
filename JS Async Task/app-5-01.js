const arr = [
    mockRequest,
    mockRequest,
    mockRequest,
    mockRequest,
    mockRequest
];

function mockRequest(name) {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Усепешно: ${name}`);
    }, Math.floor(Math.random() * 3 + 1) * 1000);
  });
  return promise;
}

// arr.forEach((mockRequest, index) => {
//   mockRequest(`Task ${index + 1}`).then((name => {
//     console.log(name);
//   }))
// });

Promise.all([mockRequest('Task 1'), mockRequest('Task 2'), mockRequest('Task 3'), mockRequest('Task 4'), mockRequest('Task 5')]).then((names) => {
  console.log("Все запросы завершены:");
  names.forEach((name) => console.log(name));
});

// Все файн 😄