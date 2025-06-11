const education = new Map();

education.set("Navalny", 3);
education.set("Putkin", 2);
education.set("Zeliboba", 4);

education.forEach((score, surname) => {
  console.log(`${surname}: ${score}`);
});

function sumScores(map) {
  let sum = 0;
  for (const score of map.values()) {
    sum += score;
  }
  return sum;
}

const result = sumScores(education);

console.log(result);
