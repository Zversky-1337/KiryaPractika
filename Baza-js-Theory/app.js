// const firstEmptyObject = {};
// const secondEmptyObject = new Object();

// const user = {
//   login: "iamsuperhero",
//   password: "qwerty",
//   "registration date": "01.01.2024",
//   "last-auth": "05.04.2024",
//   Age: 33,
//   isAdult: true,
//   job: null,
//   kids: undefined,
//   address: {
//     city: "Москва",
//     zipCode: 555444,
//   },
//   sayHi: () => console.log("Привет"),
// };

// const admin = { level: 10, status: "online" };

// console.log(user.login);
// console.log(user["registation date"]);

// user.sayHi();

// console.log(user.blablabla)

// const user = {};

// user.name = "Александр";

// delete user.name;

// const name = "Александр";
// const age = 28;

// const user = {
//   name,
//   age,
// };

// console.log(user);

// const obj = {
//   123: "Example",
// };

// console.log("123");

// const propName = prompt("Свойство с каким именем добавить в обьект?");
// const propValue = prompt(`Какое значение записать в свойство ${propName}`);

// const obj = {
//   [propName]: propValue,
// };

// console.log(obj);

// const user = {
//   name: "Александр",
//   age: 28,
//   isDeveloper: true,
// };

// for (const key in user) {
//   console.log(user[key]);
// }

// const obj1 = { age: 10 };
// const obj2 = { age: 10 };

// console.log(obj1 == obj2);

// const obj1 = { age: 10 };
// const obj2 = obj1;

// obj2.name = "Max";

// console.log(obj2);

// const obj1 = {
//   name: "Alex",
//   age: 28,
// };

// const obj2 = {
//   name: "Alex",
//   age: 28,
// };

// const areObjectsEqual = (object1, object2) => {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (const key in object1) {
//     const value1 = object1[key];
//     const value2 = object2[key];
//     const areValuesObject =
//       typeof value1 === "object" && typeof value2 === "object";

//     if (areValuesObject) {
//       return areObjectsEqual(value1, value2);
//     }

//     if (value1 !== value2) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(areObjectsEqual(obj1, obj2));

// const obj1 = { name: "Alex" };
// const obj2 = {};

// for (const key in obj1) {
//   obj2[key] = obj1[key];
// }

// obj2.name = "Max";

// console.log(obj1);
// console.log(obj2);

// const obj1 = { name: "Alex" };
// const obj2 = Object.assign({}, obj1);

// const obj1 = { name: "Alex" };
// const obj2 = { ...obj };

// const obj1 = { name: "Alex" };
// const obj2 = { age: 29 };

// const user = Object.assign({}, obj1, obj2);
// const user2 = { ...obj1, ...obj2}

// console.log(user2);

// const obj1 = { name: "Alex" };

// const obj2 = {
//   age: 20,
//   address: {
//     city: "SPB",
//   },
// };

// const obj3 = {
//   name: "Max",
//   isDeveloper: true,
//   address: {
//     zipcode: 121212,
//   },
// };

// const user = { ...obj1, ...obj2, ...obj3 };

// console.log(user);

// const user = {
//   name: "Max",
//   isDeveloper: true,
//   address: {
//     zipcode: 121212,
//     city: "SPB",
//   },
// };

// console.log(user.address?.city);

// const user = {
//   name: "Max",
//   isDeveloper: true,
//   age: 28,
// };

// const { name, isDeveloper, age } = user;

// console.log(name);
// console.log(isDeveloper);
// console.log(age);

// const logAddress = (address) => {
//   const { city, street, houseNumber, apartmentNumber } = address;

//   console.log(`
//         Адрес:
//         г. ${city}, ул. ${street},
//         д. ${houseNumber}, кв. ${apartmentNumber}
//         `);
// };

// // logAddress("Москва", "Пушкина", 21, 33);

// logAddress({
//   city: "Москва",
//   street: "Пушкина",
//   houseNumber: 21,
//   apartmentNumber: 33,
// });

// const user = {
//   name: "Alex",
// };

// const admin = {
//   name: "Boss",
// };

// const { name: userName } = user;
// const { name: adminName } = admin;

// const user1 = {
//   name: "Alex",
//   age: 22,
//   city: "SPB",
// };

// const user2 = {
//   name: "Max",
//   age: 5,
// };

// const { city = "Moscow" } = user1;

// console.log(city);

// const logUser = (user) => {
//   const { name, age, city, ...rest } = user;

//   console.log(`
//         Имя: ${name}
//         Возраст: ${age}
//         Город: ${city}
//         `);
//   console.log(rest);
// };

// logUser({
//   name: "Александр",
//   age: 29,
//   city: "Москва",
//   company: "ВК",
//   jobPost: "Фронтенд-разработчик",
// });

// console.log("This global:", this);

// function fn() {
//   console.log("This body", this);
// }

// fn();

// const user = {
//   name: "Alex",
//   age: 23,
//   logThis() {
//     console.log("This body metod", this);
//     console.log(this.name);
//   },
//   address: {
//     city: "Moscow",
//     zipcode: 123131,
//     logInnerThis: function () {
//       console.log("This body metod address", this);
//     },
//   },
// };

// user.logThis();
// user.address.logInnerThis();

// const user1 = { name: "Max" };
// const user2 = { name: "Alex" };

// function logInfo() {
//   console.log("This:", this);
//   console.log("This name:", this.name);
// }

// logInfo();

// user1.logName = logInfo;
// user2.logName = logInfo;

// user1.logName();
// user2.logName();

// const calculator = {
//   read() {
//     this.a = Number(prompt("Введите первое число", 0));
//     this.b = Number(prompt("Введите второе число", 0));
//   },
//   summ() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log(calculator);
// console.log(calculator.summ());
// console.log(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep();

// const price = 99.555;

// const roundedPrice = price.toFixed(0);

// console.log(roundedPrice);

// console.log((5.123).toFixed(2));

// const num = 100.055;

// console.log(num.toPrecision(4));

// console.log(num.toFixed(4));

// const arr = [
//   "Hi",
//   3,
//   true,
//   { name: "Alex" },
//   () => console.log("Haaha"),
//   [true, true, false],
// ];

// console.log(arr[1]);

// console.log(arr[3].name);

// arr[4]();
// console.log(arr[5][1]);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[1][0]);

// const arr = ["Hi", 3, true];

// console.log(arr);

// arr[0] = "by";
// arr[1] = 200;
// arr[2] = false;
// arr[3] = 1111;
// arr[5] = true;
// console.log(arr);
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// const letters = ["A", "B", "C"];

// console.log(letters);

// letters.push("D", "E");
// letters.shift();

// console.log(letters);

// const arr = ["Hi", 3, true];

// console.log(arr.toString());
// console.log(arr.join());

// const arr1 = ["A", "B", "C"];
// const arr2 = arr1.slice(-1);

// // arr2[0] = "_";

// console.log(arr1);
// console.log(arr2);

// const arr1 = ["A", "B"];
// const arr2 = ["C", "D"];
// const arr3 = ["E", "F"];

// // const totalArr = [...arr1, ...arr2];

// const totalArr = arr1.concat(arr2, arr3);

// console.log(totalArr);

// const arr1 = ["A", "B", "C", []];
// const arr2 = ["A", "B", "C", []];

// const areArrayEqual = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     const value1 = array1[i];
//     const value2 = array2[i];

//     const areValusesArrays = Array.isArray(value1) && Array.isArray(value2);
//     if (areValusesArrays) {
//       if (!areArrayEqual(value1, value2)) {
//         return false;
//       } else {
//         continue;
//       }
//     }
//     if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(areArrayEqual(arr1, arr2));

// const letters = ["A", "B", "C", "D", "E", "F"];

// letters.forEach((letter) => {
//   console.log(letter);
// });

// const prices = [100, 200, 300, 444, 500, 444, 1244];

// console.log(prices.indexOf(444, 4));

// const users = [
//   { name: "Alex", age: 21 },
//   { name: "Max", age: 12 },
//   { name: "Egor", age: 32 },
// ];

// console.log(users.filter((user) => user.name === "Egor"));

// console.log(users.every((user) => user.age >= 18));

// console.log(users.some((user) => user.name === "Egor"));

// console.log(
//   users.findIndex((user) => {
//     if (user.name === "Egor") {
//       return true;
//     }
//   })
// );

// console.log(users.findIndex((user) => user.name === "Egor"));

// const prices = [100, 200, 300, 444, 500, 444, 1244];

// console.log(prices.includes(500));

// const users = [
//   { name: "Alex", age: 20, city: "Moscow" },
//   { name: "Max", age: 10, city: "Moscow" },
//   { name: "Egor", age: 30, city: "SPB" },
// ];

// const filterUser = users.filter(({ city, age }) => {
//   return city === "Moscow" && age < 20;
// });

// console.log(filterUser);

// const userFormatted = users.map((user) => {
//   return `${user.name}, ${user.age}, ${user.city}`;
// });

// console.log(userFormatted);

// let ageSum = 0;

// for (let i = 0; i < users.length; i++) {
//   ageSum += users[i].age;
// }

// console.log(ageSum / users.length);

// const ageSum = users.reduce((sum, { age }) => sum + age, 0);

// console.log(ageSum / users.length);

// const reversedUser = users.reverse(); // мутирует изначальный обьект
// const reversedUser1 = [...users].reverse(); // мутирует изначальный обьект

// const numbers = [9, 4, 444, 4];
// const sortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log(sortedNumbers);
