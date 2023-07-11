import { login } from "./login";

export function signUp(root) {
  const signUpDiv = document.createElement("div");

  const username = document.createElement("input");
  const password = document.createElement("input");
  const data = document.createElement("input");
  const signupBtn = document.createElement("button");
  const loginBtn = document.createElement("button");

  username.type = "text";
  password.type = "password";
  data.type = "text";
  signupBtn.textContent = "Sign Up";
  loginBtn.textContent = "Log Up";

  signupBtn.addEventListener("click", (e) => {});

  loginBtn.addEventListener("click", (e) => {
    login(root);
  });

  signUpDiv.append(username, password, data, signupBtn);
  return signUpDiv;
}
