function logApi() {
  const arrayPromises = [];
  for (let i = 0; i < 10; i++) {
    const userPromise = fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json();
      })
      .then((arr) => {
        const text = `Пользователь: ${arr[i].name} (${arr[i].email})`;
        return text;
      })
      .catch((error) => console.log(error));

    const postPromise = fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${i + 1}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json();
      })
      .then((arr) => {
        let text = "Посты: \n";
        arr.forEach((j) => {
          text += `- ${j.title} \n`;
        });
        return text;
      })
      .catch((error) => console.log(error));

    arrayPromises.push(Promise.all([userPromise, postPromise]));
  }
  Promise.all(arrayPromises)
    .then((arr) => {
      arr.forEach(([userText, postsText]) => {
        console.log(`${userText} \n ${postsText}`);
      });
    })
    .catch((error) => {
      console.error("Произошла ошибка:", error.message);
    });
}

logApi();
