class Animal {
  speak() {
    return "Звук животного";
  }
}

class Dog extends Animal {
  speak() {
    return "Гав!";
  }
  fetch() {
    return "Принес палку!";
  }
}

// Проверка
const dog = new Dog();
console.log(dog.speak()); // "Гав!"
console.log(dog.fetch()); // "Принес палку!"
