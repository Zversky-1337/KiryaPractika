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
    password,
    options: { poolSize, timeout },
  },
} = config;

console.log(host, port, user, poolSize);

// Получи переменные: host, port, user, poolSize
