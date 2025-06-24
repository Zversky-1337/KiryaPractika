function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test); // undefined т.к мы запомнили контекст можем на него ссылаться но не забирайть свойства
