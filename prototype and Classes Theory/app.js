// 1. No
// 2. yes
// Object.prototype
// no
//yes
//Array.prototype
//yes
//yes
//Function.prototype
// no
// yes
// Samurai.prototype
//yes
//no
//yes
//Function.prototype
/*
1. yes
2. no
3. yes
4. no
5. no
6. no
7. yes
8. yes
9. Function.prototype
10. Number.prototype
*/

// const person = {
//   name: "Max",
//   age: 25,
//   greet: function () {
//     console.log("Greet");
//   },
// };

// const person = new Object(
//     {
//   name: "Max",
//   age: 25,
//   greet: function () {
//     console.log("Greet");
//   },
// };
// )

// Object.prototype.sayHello = function() {
//     console.log('Hello')
// }

// console.log(person.sayHello())

// const lena = Object.create(person)
// lena.name = 'Elena'

// const str = new String('I am string')
// str.sayHello()

// class Student {
//   planet = "Planet";
//   country = "Russia";
//   region;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   logAge() {
//     console.log(this.age);
//   }
// }

// const firstStudent = new Student("Max", 25);
// const secondStudent = new Student("Egor", 19);

// function makeCounter() {
//   let count = 0; // приватная переменная

//   return function() {
//     count++;
//     return count;
//   }
// }

// const counter = makeCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// function greet(greeting, name) {
//   console.log(greeting + ", " + name + "!");
// }

// greet.call(null, "Привет", "Кирилл"); // "Привет, Кирилл!"

// greet("Привет", "Кирилл");

function loadData(callback) {
  setTimeout(() => {
    const data = { name: "Иван", age: 25 };
    callback(null, data); // Первый аргумент — ошибка, второй — данные
  }, 1000);
}

loadData((error, result) => {
  if (error) {
    console.error("Произошла ошибка:", error);
  } else {
    console.log("Данные загружены:", result);
  }
});
