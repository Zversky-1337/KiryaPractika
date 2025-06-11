const user = {
  name: "Оля",
  age: 28,
  password: "секрет",
  toJSON() {
    return { name: this.name, age: this.age };
  },
};

const result = JSON.stringify(user);

console.log(result);
