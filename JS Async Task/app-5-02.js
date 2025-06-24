function request1(url) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Результат запроса: ${url}`);
    }, Math.floor((Math.random() * 3 + 1) * 1000));
  });
  return promise;
}

function request2(url) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Результат запроса: ${url}`);
    }, Math.floor((Math.random() * 3 + 1) * 1000));
  });
  return promise;
}

Promise.race([request1("1"), request2("2")]).then(console.log);
