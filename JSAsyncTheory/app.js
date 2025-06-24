// console.log("Start code");
// try {
//   const names = undefined;

//   names.forEach((name) => {
//     console.log("Name", name);
//   });
// } catch (error) {
//   console.log("Error", error);
//   console.log("Error", error.name);
//   console.log("Error", error.message);
//   console.log("Error", error.stack);
// }
// console.log("End code");

// console.log("Start code");
// try {
//   const userJSON = `{
//   "age": 28}`;

//   const user = JSON.parse(userJSON);
//   const { name, age } = user;

//   if (!name) {
//     const errorMessage = "Name have not";
//     throw new Error(errorMessage);
//   }

//   console.log(`Hi, ${name}!
//     Your age - ${age}, right?`);
// } catch (error) {
//   console.log("Error", error);
// }
// console.log("End code");

// try {
//   // пытаемся выполнить код
// } catch (error) {
//   // обрабатываем возникшую ошибку
// } finally {
//   // выполняем при любом раскладке
// }

// shortTask();

// longTask();

// longTask();

// longTask();

// shortTask();

// shortTask();

// console.log("Task1");
// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 3000);
// console.log("Task2");
// console.log("Task3");

// const fetchUsers = (resourse) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4) {
//         if (request.status === 200) {
//           const response = JSON.parse(request.responseText);
//           resolve(response);
//           return;
//         }
//         reject("no avalable");
//       }
//     });
//     request.open("GET", resourse);

//     request.send();
//   });
// };
// console.log(1);
// console.log(2);

// fetchUsers("JSAsyncTheory/anton.json")
//   .then((response) => {
//     console.log("promise avalable", response);
//     return fetchUsers("JSAsyncTheory/kirill.json");
//   })
//   .then((response) => {
//     console.log("promise avalable", response);
//     return fetchUsers("JSAsyncTheory/max.json");
//   })
//   .then((response) => {
//     console.log("promise avalable", response);
//   })
//   .catch((error) => {
//     console.log("promise not avalable", error);
//   });

// fetchUsers((error, data) => {
//   console.log(data);
//   fetchUsers((error, data) => {
//     console.log(data);
//     fetchUsers((error, data) => {
//       console.log(data);
//     }, "JSAsyncTheory/max.json");
//   }, "JSAsyncTheory/kirill.json");
// }, "JSAsyncTheory/anton.json");

// console.log(3);
// console.log(4);

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve("312");
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// getSomething()
//   .then(() => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const fetchUsers = async () => {
//   const response = await fetch("anton.json");
//   const data = await response.json();
//   return data;
// };

// fetchUsers().then((data) => {
//   console.log("greate", data);
// });
// console.log(users);

// fetch("anton.json")
//   .then((response) => {
//     console.log("Greate", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Greate", error);
//   });

// console.log("1");

// setTimeout(() => {
//   console.log("setTimeout 1");
//   Promise.resolve().then(() => {
//     console.log("promise setTimeout");
//   });
// }, 0);

// setTimeout(() => {
//   console.log("setTimeout 2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise 1");
// });

// Promise.resolve().then(() => {
//   console.log("promise 2");
// });
// console.log("4");

// ("1");
// ("4");
// ("promise 1");
// ("promise 2");
// ("setTimeout 1");
// ("promise setTimeout");
// ("setTimeout 2");

// function request(delay, isRejected) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isRejected) {
//         reject(`${delay} was rejected`);
//       } else {
//         resolve(`${delay} was resolved`);
//       }
//     }, delay * 1000);
//   });
// }

// const data = [
//   {
//     value: 1,
//     isRejected: false,
//   },
//   {
//     value: 2,
//     isRejected: false,
//   },
//   {
//     value: 3,
//     isRejected: false,
//   },
// ];

// const promises = data.map(({ value, isRejected }) => {
//   return request(value, isRejected);
// });

// console.log(promises);

// (async function () {
//   for await (let data of promises) {
//     console.log(data);
//   }
// })();

// Promise.all(promises);
