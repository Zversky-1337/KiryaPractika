const user = {
  name: "Оля",
  age: 28,
  password: "секрет",
  toJSON() {
    return { name: this.name, age: this.age };
  },
};

//Решение должно было быть таким
const user2 = {
  name: "Оля",
  age: 28,
  password: "секрет",
  toJSON() {
    return JSON.stringify({ name: this.name, age: this.age });
  },
};

const result = user2.toJSON()

console.log(result);
