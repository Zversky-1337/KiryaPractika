console.log((1.35).toFixed(1)); // 1.4
console.log((6.35).toFixed(1)); // 6.3 ошибка потому что числа храняться в двоичном коде и это число не является в нем двоичным как 10. 3 в десятичной сс
console.log((6.35 * 10).toFixed(0) / 10); // можно так или
console.log(Math.round(6.35 * 10) / 10);
