import express from "express";
import bodyParser from "body-parser";

const app = express();

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/users", (req, res) => {
  res.send("hey users");
});
app.use(bodyParser.text());
app.post("/users", (req, res) => {
  const body = req.body;
  console.log(res);
  res.status(201);
  res.send(req.body);
  console.log(res.statusCode);
});

app.listen(3000);
