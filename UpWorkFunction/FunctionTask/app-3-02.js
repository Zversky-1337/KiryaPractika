function makeWorker() {
  let name = "Pete";

  return function () {
    alert(name);
  };
}

let name = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // Pete еееее 2 из 2 сюда блин
