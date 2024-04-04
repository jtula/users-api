const promise = require("mysql2/promise");
const { db } = require("./config");

const pool = promise.createPool({
  host: db.host,
  port: db.port,
  database: db.database,
  user: db.user,
  password: db.password,
});

module.exports = pool;

