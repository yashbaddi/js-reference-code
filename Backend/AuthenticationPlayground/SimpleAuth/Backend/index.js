import express from "express";
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
      res.send("Incorrect Password");
    }
  } else {
    res.send("Invalid User");
  }
});

app.post("/logout", () => {
  res, clearCookie("authenticated");
});

app.get("/", authMiddleware, (req, res) => {
  res.send(users[req.cookies.username].data);
});

app.listen(7000);
