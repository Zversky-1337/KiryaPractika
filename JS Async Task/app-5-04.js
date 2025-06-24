function sendInChunks(arrayOf100, chunkSize) {
  const arr = [];
  for (let i = 0; i < arrayOf100.length; i += chunkSize) {
    arr.push(arrayOf100.slice(i, i + chunkSize));
  }
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(`Пакет ${i + 1} ${arr[i]} отправвлен`);
    }, i * 1000);
  }
}

const arrayOf100 = Array.from({ length: 100 }, (_, i) => i + 1);

sendInChunks(arrayOf100, 10);

// Скорее всего нужно было сделать не так и более локанично но я сделал и меня не ебет)
