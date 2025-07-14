// 'use strict'

Promise.resolve(0)
  .then((result) => {
    return result + 5;
  })
  .then((result) => {
    return result + 5;
  })
  .then((result) => {
    return result + 5;
  })
  .then((result) => {
    console.log("Итог:", result);
  });
























// Ты засоряешь глобальный объект переменным это супер крит

// Зачем уродские скобки?
// Объявляй переменную он тебе ошибку дропнет не в стрикт режиме

