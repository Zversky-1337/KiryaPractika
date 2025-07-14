const user = { name: "Иван", age: 25, city: "Москва" };

// Доставай только нужные поля
const { name, age, city } = user;

console.log(name);
console.log(city);

const coords = [10, 20, 30];

const [x, y, z] = coords;

console.log(x);
console.log(y);
console.log(z);

console.log(coords.length);

// Все файн 😄