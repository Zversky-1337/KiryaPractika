function countWords(arr) {
  const wordMap = new Map();

  for (const word of arr) {
    if (wordMap.has(word)) {
      // если слово уже есть, увеличиваем счётчик
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      // если слова ещё нет, добавляем с 1
      wordMap.set(word, 1);
    }
  }

  return wordMap;
}

const words = ["яблоко", "банан", "яблоко"];
console.log(countWords(words)); // Map { 'яблоко' => 2, 'банан' => 1 }
