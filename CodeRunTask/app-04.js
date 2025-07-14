function checkBrackets(str) {
  const arrStr = str.split("");
  let status = true;

  const map = new Map();

  arrStr.forEach((symbl) => {
    if (map.has(symbl)) {
      const count = map.get(symbl) + 1;
      map.set(symbl, count);
    } else {
      map.set(symbl, 1);
    }
    if (map.get("(") < map.get(")")) {
      return (status = false);
    } else return (status = true);
  });

  if (map.get("(") === map.get(")")) {
    status = true;
  } else status = false;
  return status;
}

console.log(checkBrackets("(()))("));
