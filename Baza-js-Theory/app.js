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

const logUser = (user) => {
  const { name, age, city, ...rest } = user;

  console.log(`
        Имя: ${name}
        Возраст: ${age}
        Город: ${city}
        `);
  console.log(rest);
};

logUser({
  name: "Александр",
  age: 29,
  city: "Москва",
  company: "ВК",
  jobPost: "Фронтенд-разработчик",
});
