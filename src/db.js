const promise = require("mysql2/promise");

const pool = promise.createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "usersapi",
});

module.exports = pool;

