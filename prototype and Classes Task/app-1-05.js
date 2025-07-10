// declaration of defer method on Function prototype
Function.prototype.defer = (ms) => {
  // use this to refer to the function itself
  return setTimeout(f, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

// you're clown 🤡
