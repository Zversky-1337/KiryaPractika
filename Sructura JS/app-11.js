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

const { server, db } = config;

const { host, port } = server;

const { user, password, options } = db;

const { poolSize, timeout } = options;

console.log(host, port, user, poolSize);

// Получи переменные: host, port, user, poolSize
