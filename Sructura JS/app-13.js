const data = [
  { id: { country: "US", code: 1 }, name: "Alice" },
  { id: { country: "RU", code: 7 }, name: "Boris" },
];

function groupById(arr) {
  const map = new Map();
  for (const item of arr) {
    map.set(item.id, item);
  }
  return map;
}

function serializeMapWithObjectKeys(map) {
  const serialized = [];
  for (const [key, value] of map.entries()) {
    serialized.push({
      key: JSON.stringify(key),
      value,
    });
  }
  return JSON.stringify(serialized);
}

function deserializeMapWithObjectKeys(json) {
  const parsed = JSON.parse(json);
  const map = new Map();
  for (const { key, value } of parsed) {
    map.set(JSON.parse(key), value);
  }
  return map;
}

const map = groupById(data);
const json = serializeMapWithObjectKeys(map);
const restoredMap = deserializeMapWithObjectKeys(json);
console.log(restoredMap); // нужно ее обсудить оч сложно пока
