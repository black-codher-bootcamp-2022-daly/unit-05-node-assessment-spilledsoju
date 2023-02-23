require("dotenv").config();
const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const todoFilePath = process.env.BASE_JSON_PATH;

//Read todos from todos.json into variable
let todos = require(__dirname + todoFilePath);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(bodyParser.json());

app.use("/content", express.static(path.join(__dirname, "public")));

app.get("/", (_, res) => {
  res.sendFile("./public/index.html", { root: __dirname }, (err) => {
    if (err) console.log(err);
  });
});

app.get("/todos", (_, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(todoFilePath, { root: __dirname }, (err) => {
    if (err) console.log(err);
  })

  
});

//Add GET request with path '/todos/overdue'
app.get("/todos/overdue", (req, res) => {
  res.send();
  return res.end();
});

//Add GET request with path '/todos/completed'
app.get("/todos/completed", (req, res) => {
  res.send();
  return res.end();
});

//Add POST request with path '/todos'
app.post("/todos", (req, res) => {
  res.send();
  return res.end();
});

//Add PATCH request with path '/todos/:id
app.patch("/todos/:id", (req, res) => {
  res.send();
  return res.end();
});

//Add POST request with path '/todos/:id/complete
app.post("/todos/:id/complete", (req, res) => {
  res.send();
  return res.end();
});

//Add POST request with path '/todos/:id/undo
app.post("/todos/:id/undo", (req, res) => {
  res.send();
  return res.end();
});

//Add DELETE request with path '/todos/:id
// app.delete("/todos/:id", (req, res) => {
//   res.send();
//   return res.end();
// });

app.listen(port, function () {
  console.log(`Node server is running... http://localhost:${port}`);
});

module.exports = app;
