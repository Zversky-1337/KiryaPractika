const users = [
  { name: "Alice", age: 25, score: 85 },
  { name: "Max", age: 25, score: 90 },
  { name: "Egor", age: 30, score: 70 },
  { name: "Dima", age: 30, score: 75 },
  { name: "Anton", age: 35, score: 85 },
];

function groupByAge(arrUsers) {
  const mapUsers = new Map();

  arrUsers.forEach((obj) => {
    if (mapUsers.has(obj.age)) {
      const current = mapUsers.get(obj.age);
      current.users.push(obj.name);

      const totalScore =
        current.avgScore * (current.users.length - 1) + obj.score;

      const newAvgScore = totalScore / current.users.length;

      current.avgScore = newAvgScore;

      mapUsers.set(obj.age, current);
    } else {
      mapUsers.set(obj.age, {
        users: [obj.name],
        avgScore: obj.score,
      });
    }
  });

  const ageResult = Object.fromEntries(mapUsers);
  return ageResult;
}
console.log(groupByAge(users));
