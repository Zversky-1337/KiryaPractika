function doAsync(callback) {
  setTimeout(callback, 1000);
}

doAsync(() => {
  console.log("Результат");
});

// Все файн 😄