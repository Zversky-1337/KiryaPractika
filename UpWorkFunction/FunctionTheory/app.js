// const square = (n) => {
//   return n * n;
// };

// const surfaceAreaCalculator = (radius) => {
//   return 4 * 3.14 * square(radius);
// };

// const surfaceOfMars = surfaceAreaCalculator(3390);

// console.log(surfaceOfMars);

// const factorial = (n) => {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(3));

// const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = [6, 7, 8];

// const allNumbers = [...numbers1, ...numbers2, 12];

// Math.max(...allNumbers);

// function sum(a, b, c) {
//   return a + b + c;
// }

// sum(...numbers2);

// const obj1 = {
//   name: "Anna",
//   x: 20,
// };

// const obj2 = {
//   name: "Max",
//   y: 12,
// };

// const newObjClone1 = { ...obj1 };

// const mergedObj = { ...obj1, ...obj2 };

// function sum(a, b, ...args) {
//   let result = a + b;
//   for (let i = 0; i < args.length; i++) {
//     result += args[i];
//   }
//   return result;
// }

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunction(32);

// calc();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addTen(10));

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator("com");
// const ruUrl = urlGenerator("ru");

// console.log(comUrl("google"));
// console.log(comUrl("netflix"));

// console.log(ruUrl("yandex"));

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   };
// }

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = { name: "Max", age: 22, job: "Frontend" };
// const person2 = { name: "Alex", age: 43, job: "SMM" };

// bind(person1, logPerson)();
// bind(person2, logPerson)();

// var someInfo = "Some Info";

// console.log(window.someInfo);
// console.log(someInfo);

// function exampleFunction(a = 10, b = 20) {
//   return a + b;
// }
// console.log(window.exampleFunction());
// console.log(exampleFunction());

// const doSumething = () => {};

// const logMessage = (name, age) => {
//   alert(`Hi, my name is ${name}, me ${age} years old `);
// };

// setTimeout(logMessage, 200, "Alex", 29);

// setTimeout(() => {
//   alert("Lets go");
// }, 2000);

// const logMessage = () => {
//   alert("Do something");
// };

// const timerId = setTimeout(logMessage, 2000);

// clearTimeout(timerId);

// const intervslId = setInterval(() => {
//   console.log("Hi");
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervslId);
// }, 5000);

// setTimeout(function logMessage() {
//   alert("Message");
//   setTimeout(logMessage, 1000);
// }, 1000);

// console.log("Message 1");

// setTimeout(() => {
//   console.log("Message 2");
// });

// console.log("message 3");

// function hello() {
//   console.log("Hello", this);
// }

// const person = {
//   name: "Max",
//   age: 25,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(this),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };

// const lena = {
//   name: "Elena",
//   age: 24,
// };

// person.logInfo.bind(lena, "Frontend", "8-800-555-35-35")();
// person.logInfo.call(lena, "Frontend", "8-800-555-35-35");
// person.logInfo.apply(lena, ["Frontend", "8-800-555-35-35"]);

// const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }

// Array.prototype.multBy = function (n) {
//   return this.map(function (i) {
//     return i * n;
//   });
// };
// console.log(array.multBy(2));

// exports.default = {
//     title: 'Phone'
// }

// console.log(this)

// function myFunction1() {
//   function myFunction() {
//     console.log(this);
//   }
//   myFunction();
// }

// myFunction1();

// const item = {
//   title: "phone",
//   fullPrize: 100,
//   calculatePrice(discountPercent = 0) {
//     console.log(this.fullPrize - (discountPercent / 100) * this.fullPrize);
//   },
// };

// item.calculatePrice(20);

// function myFunction() {
//   console.log(this);
// }
// const item = { title: "Phone" };
// myFunction.apply(item);

// function calcDiscount(age) {
//   if (age > 65) {
//     console.log(this.price / 2);
//   } else {
//     console.log(this.price);
//   }
// }

// const item = { title: "phone", price: 1000 };
// calcDiscount.call(item, 70);
// const calcDiscountForElderly = calcDiscount.call(item, 70);
// calcDiscountForElderly()

// function CreateItem(title, price) {
//   this.title = title;
//   this.price = price;
//   return this;
// }

// const item1 = new CreateItem("Phone", 100);
// const item2 = new CreateItem("Phone", 1100);
// const item3 = new CreateItem("Phone", 13300);
// console.log(item1, item2, item3);

// const obj = {
//   getThis1: function () {
//     console.log(this);
//   },
//   getThis2: () => {
//     console.log(this);
//   },
// };

// obj.getThis1();
// obj.getThis2();

// const obj = {
//   lastName: "Ivanov",
//   firstname: ["Max", "Alex"],
//   logFullName1: function () {
//     this.firstname.forEach(function (name) {
//       console.log(`${this.lastName} ${name}`);
//     }, this);
//   },
//   logFullName2: function () {
//     this.firstname.forEach((name) => {
//       console.log(`${this.lastName} ${name}`);
//     });
//   },
// };

// obj.logFullName2();

// const item = {
//   title: "Phone",
//   logTitle: function () {
//     setTimeout(
//       function () {
//         console.log(`Product ${this.title}`);
//       }.bind(this)
//     );
//   },
// };

// item.logTitle();
