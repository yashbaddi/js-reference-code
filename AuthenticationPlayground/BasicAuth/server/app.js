import express from "express";
import { authMiddleware } from "./auth.js";

const app = express();

app.use("/login", express.static("../server"));

app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(9080);
