async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users[0].name);
  } catch (error) {
    console.error(error)
  }

}

getUser();

// Все файн 😄