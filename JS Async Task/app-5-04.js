const arrayOf100 = Array.from({ length: 100 }, (_, i) => i + 1);

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

// sendInChunks(arrayOf100, 10);


// Скорее всего нужно было сделать не так и более локанично но я сделал и меня не ебет)


function splitDataToChucks(arr, chunkSize) {
  const chunkArr = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkArr.push(arr.slice(i, i + chunkSize));
  }

  return chunkArr
}

function sendRequest(chunk, id) {
  setTimeout(() => {
    console.log(`Пакет ${id} ${chunk} отправвлен`);
  }, id * 1000);
}

function sendData(arrayOf100, chunkSize) {
 const chunksArr = splitDataToChucks(arrayOf100, chunkSize);

  chunksArr.forEach((chunk, index) => {
    sendRequest(chunk, index + 1)
  })
}

sendData(arrayOf100, 10)
