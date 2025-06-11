const user = { name: "admin", password: "1234" };
const { password, ...safeUser } = user;
const result = JSON.stringify(safeUser);
console.log(result);
