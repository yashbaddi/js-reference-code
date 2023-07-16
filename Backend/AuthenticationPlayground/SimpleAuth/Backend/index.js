import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

function authMiddleware(req, res, next) {
  if (req.cookies.authenticated == true) {
    next();
  } else {
    res.status(401).res.send("UnAuthorized");
  }
}

const users = {};

app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
//     exposedHeaders: ["authorization"], // you can change the headers
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//     preflightContinue: false,
//   })
// );

// app.use(
//   cors({
//     origin: ["http://localhost:4500", "http://localhost:8000"],
//     credentials: true,
//   })
// );

app.post("/signup", (req, res) => {
  users[req.body.username] = {
    password: req.body.password,
    data: req.body.data,
  };
  res.redirect("/login");
});

app.post("/login", (req, res) => {
  if (users[req.body.username]) {
    if (users[req.body.username].password === req.body.password) {
      res.cookie("authenticated", true);
      res.cookie("username", req.body.username);
      res.redirect("/");
    } else {
      res.status(401).json({ message: "Incorrect Password" });
    }
  } else {
    res.status(401).json({ message: "Invalid Username" });
  }
});

app.post("/logout", () => {
  res, clearCookie("authenticated");
});

app.get("/", authMiddleware, (req, res) => {
  res.send(users[req.cookies.username].data);
});

app.listen(7000);
