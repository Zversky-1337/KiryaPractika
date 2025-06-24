Promise.resolve(0)
  .then(() => {
    return (firstMove = 5);
  })
  .then(() => {
    return (secondMove = firstMove + 5);
  })
  .then(() => {
    return (result = secondMove + 5);
  })
  .then((result) => {
    console.log("Итог:", result);
  });
