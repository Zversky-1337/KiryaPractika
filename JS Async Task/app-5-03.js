async function main(params) {
  function failAfter(ms) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Слишком долго!");
      }, ms);
    });
    return promise;
  }

  function fetchSomething() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Готово!"), 4000);
    });
  }

  await Promise.race([fetchSomething(), failAfter(3000)])
    .then(console.log)
    .catch((err) => {
      console.log(err);
    });
}

main();

// Все файн 😄