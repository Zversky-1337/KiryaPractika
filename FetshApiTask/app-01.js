function logApi() {
  const arrayPromises = [];
  for (let i = 0; i < 10; i++) {
    arrayPromises.push(
      new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
          })
          .then((arr) => {
            const text = `Пользователь: {${arr[i].name}} ({${arr[i].email}})`;
            resolve(text);
          })
          .catch();
      })
    );

    arrayPromises.push(
      new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${i + 1}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
          })
          .then((arr) => {
            let text = "Посты: \n";
            arr.forEach((j) => {
              text += `- {${j.title}} \n`;
            });
            resolve(text);
          })
          .catch();
      })
    );
  }
  Promise.all(arrayPromises).then((arr) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(`${arr[i]} \n ${arr[i + 1]}`);
      i++;
    }
  });
}

logApi();
