async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const user1 = await response.json();
  console.log(user1[0].name);
}

getUser();
