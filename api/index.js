const express = require("express");

const app = express();

app.get("/*", (_, res) => {
  res.json({
    message: "hello"
  })
})

app.listen("8000", () => {
  console.log("listening...")
})