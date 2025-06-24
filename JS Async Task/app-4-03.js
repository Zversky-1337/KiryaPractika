async function main() {
  console.log("1");

  await new Promise((resolve) => {
    console.log("2");
    setTimeout(resolve, 0);
  });

  console.log("3");

  Promise.resolve().then(() => console.log("4"));
}

setTimeout(() => console.log("5"), 0);

main();

Promise.resolve().then(() => console.log("6"));

console.log("7");

// Мой ответ
// '1'
// '3'
// '7'
// '4'
// '6'
// '2'
// '5'

// Правильный ответ
// 1
// 2
// 7
// 6
// 5
// 3
// 4
