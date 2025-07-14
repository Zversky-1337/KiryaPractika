const user = { name: "Катя", age: 22 };
const user2 = { name: "Дима", age: 22, country: 'Казахстан' };

// const { country = "Россия" } = user;
const { country = "Россия" } = user2;

console.log(country);

// Все файн 😄