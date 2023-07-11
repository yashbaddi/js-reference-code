import { sign } from "crypto";
import { signUp } from "./signup.js";

export function login(root) {
  root.innerHTML = "";

  const loginDiv = document.createElement("div");
  const username = document.createElement("input");
  const password = document.createElement("input");
  const loginBtn = document.createElement("button");
  const signupBtn = document.createElement("button");

  username.type = "text";
  password.type = "password";
  loginBtn.textContent = "Log In";
  signupBtn.textContent = "SignUp";

  loginDiv.append(username, password, loginBtn);
  loginBtn.addEventListener("click", (e) => {});
  signupBtn.addEventListener("click", (e) => {
    signUp(root);
  });

  root.append(loginDiv);
}
