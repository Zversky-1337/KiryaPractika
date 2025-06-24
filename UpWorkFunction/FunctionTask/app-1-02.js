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

function printList(list) {
  if (list.next === null) {
    return console.log(list.value);
  } else {
    printList(list.next);
    return console.log(list.value);
  }
}

printList(item);
