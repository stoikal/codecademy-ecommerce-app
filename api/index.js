require('dotenv').config();

const express = require("express");

const app = express();

const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
});

app.get("/products", (req, res) => {
  pool.query('SELECT * FROM products', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

app.get("/*", (_, res) => {
  res.json({
    message: "hello"
  });
});

app.listen("8000", () => {
  console.log("listening...")
});