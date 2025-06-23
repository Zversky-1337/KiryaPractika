fetch("<https://jsonplaceholder.typicode.com/users/1>")
  .then()
  .catch((error) => {
    console.log("Error", error);
  });
