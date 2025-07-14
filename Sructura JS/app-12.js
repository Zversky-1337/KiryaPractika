const map = new Map([
      ["user1", { name: "Alice", age: 25 }],
      ["user2", { name: "Bob", age: 30 }],
    ]
);

const mapAsString = JSON.stringify([...map]);
const parsed = JSON.parse(mapAsString)

const parseMap = new Map(parsed);

console.log(parsed);
console.log(mapAsString);
console.log(parseMap);

// Все файн 😄