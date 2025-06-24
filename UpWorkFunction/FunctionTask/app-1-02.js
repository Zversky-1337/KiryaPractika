let item = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// function printList(list) {
//   if (list.next === null) {
//     return console.log(list.value);
//   } else {
//     printList(list.next);
//     return console.log(list.value);
//   }
// }


function printList(list) {
  console.log(list.value); // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }
}


printList(item)

// Все файн 😄 (Более лаконичный варик выше)