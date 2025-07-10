fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
      const user1 = users[0]
      console.log(user1.name);
  }).catch((error) => {
      console.error(error)
})

// Все файн 😄