Function.prototype.defer = function(ms)  {
  return setTimeout(this, ms);
};

function f() {
  console.log("Hello! f");
}

function b() {
  console.log("Hello! b");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
b.defer(1000);

// you're clown 🤡
