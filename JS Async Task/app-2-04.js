fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((user1) => {
    console.log(user1[0].name);
  });
