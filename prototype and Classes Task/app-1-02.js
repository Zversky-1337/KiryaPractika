let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat(); // rabbit


Object.setPrototypeOf(rabbit, animal);

// Все файн 😄