const config = {
  server: {
    host: "localhost",
    port: 8080,
  },
  db: {
    user: "admin",
    password: "1234",
    options: {
      poolSize: 5,
      timeout: 1000,
    },
  },
};

const {
  server: { host, port },
  db: {
    user,
    //Ты не используешь password и timeout, но всё равно деструктурируешь их.
    password,
    options: { poolSize, timeout },
  },
} = config;

// Можно вот так
// const {
//   server: { host, port },
//   db: {
//     user,
//     options: { poolSize },
//   },
// } = config;

console.log(host, port, user, poolSize);

// Получи переменные: host, port, user, poolSize

// Все файн 😄
