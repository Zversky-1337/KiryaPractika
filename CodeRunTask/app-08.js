class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`);
  }
}

const person1 = new Person("Иван", 25);

person1.greet();
