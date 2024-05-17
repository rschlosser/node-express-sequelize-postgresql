module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "dimp4Pg$38",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
