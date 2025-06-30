Function.prototype.defer = (ms) => {
  return setTimeout(f, ms);
};

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
