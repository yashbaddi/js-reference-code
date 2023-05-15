import express from "express";

const app = express();
console.log(typeof app);
console.log("app data", app);
app.get("/", (req, res) => {
  res.send("hey");
});

app.listen(3000);
