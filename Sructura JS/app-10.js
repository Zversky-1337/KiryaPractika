const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alicia" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bobby" },
];

const map = new Map();

for (const user of users) {
  map.set(user.id, user);
}

const result = Array.from(map.values());

console.log(result);


// Все файн 😄