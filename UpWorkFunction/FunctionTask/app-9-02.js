function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f(); // я ответил нет но думал что будет петя а не вася
