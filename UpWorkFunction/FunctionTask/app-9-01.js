'use strict'

function f() {
  console.log(this); //
}

let user = {
  g: f.bind(null),
};

user.g(); // null

// Все файн 😄