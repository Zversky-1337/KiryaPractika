class StringArray extends Array {
  join(separated) {
    return super.join(separated).toUpperCase();
  }
}

// Проверка
const arr = new StringArray("hello", "world");
console.log(arr.join(" ")); // "HELLO WORLD"
