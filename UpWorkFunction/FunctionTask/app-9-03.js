function sayHi() {
  console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({name: "Вася"});

const obj = {
  name: "Dima",
  bound: sayHi
}

// console.log(bound.test); // undefined т.к мы запомнили контекст можем на него ссылаться но не забирайть свойства
// console.log(sayHi.test); //
// sayHi();
bound();
obj.bound()
// console.log(arr.test);

// Все файн 😄