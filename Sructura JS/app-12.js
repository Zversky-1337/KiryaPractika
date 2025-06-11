const map = new Map([
  ["user1", { name: "Alice", age: 25 }],
  ["user2", { name: "Bob", age: 30 }],
]);

const mapAsString = JSON.stringify([...map]);

const parseMap = new Map(JSON.parse(mapAsString));

console.log(mapAsString);
console.log(parseMap);
