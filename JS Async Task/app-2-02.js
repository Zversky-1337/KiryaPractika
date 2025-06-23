function asyncPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Готово");
    }, 1000);
  });
}

asyncPromise().then((msg) => {
  console.log("Результат:", msg);
});
