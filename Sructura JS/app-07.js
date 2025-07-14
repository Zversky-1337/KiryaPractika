const person = { name: "Аня", age: 30 };

const personAsString = JSON.stringify(person);
console.log(personAsString);

const productInfo = '{"product":"Яблоко","price":50}';

const parseProductInfo = JSON.parse(productInfo);
console.log(parseProductInfo);

// Все файн 😄