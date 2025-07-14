function firstUniqueChar(str) {
  const arrayStr = str.split("").reverse();
  const map = new Map();

  arrayStr.forEach((symbl) => {
    if (map.has(symbl)) {
      const count = map.get(symbl) + 1;
      map.set(symbl, count);
    } else {
      map.set(symbl, 1);
    }
  });

  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return null;
}

console.log(firstUniqueChar("укеуап"));
console.log(firstUniqueChar("aabbaabccdddde"));
console.log(firstUniqueChar("aabbccee"));
