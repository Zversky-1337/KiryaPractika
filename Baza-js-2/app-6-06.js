function truncate(str, maxlength) {
  if (str.lenght <= maxlength) {
    return str;
  }
  return str.slice(0, maxlength - 1) + "...";
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
