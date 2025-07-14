class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`Животное ${this.name} издает звук.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`Собака ${this.name} лает.`);
  }
}

const dog = new Dog("Шарик");
dog.speak();
dog.bark();
