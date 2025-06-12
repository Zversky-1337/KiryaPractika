const current = ["read", "write", "comment"];
const updated = ["read", "comment", "share"];

const currentSet = new Set(current);
const updatedSet = new Set(updated);

// const added = [...updatedSet].filter(
//   (permission) => !currentSet.has(permission)
// );
// const removed = [...currentSet].filter(
//   (permission) => !updatedSet.has(permission)
// );
//
// console.log("Added:", added);
// console.log("Removed:", removed); // нихуя непонятно

// Обсудим вот решение рабочее

const added = updated.filter(
    (permission) => !currentSet.has(permission)
);
const removed = current.filter(
    (permission) => !updatedSet.has(permission)
);

console.log("Added:", added);
console.log("Removed:", removed)