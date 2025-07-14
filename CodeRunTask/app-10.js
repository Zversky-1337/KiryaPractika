class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Животное ${this.name} издает звук.`);
  }
}

class Dog extends Animal {
  constructor(name, bread) {
    super(name);
    this.bread = bread;
  }

  speak() {
    super.speak();
    console.log(`Собака ${this.name} (порода: ${this.bread}) лает`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  speak() {
    console.log(`Кошка ${this.name} с окрасом ${this.color} мяукает`);
  }
}

const animals = [
  new Dog("Шарик", "овчарка"),
  new Cat("Мурка", "черный"),
  new Dog("Бобик", "лабрадор"),
];

for (const animal of animals) {
  animal.speak();
}
