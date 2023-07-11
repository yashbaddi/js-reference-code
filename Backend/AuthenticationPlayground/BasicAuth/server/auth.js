import base64 from "base-64";

export function authMiddleware(req, res, next) {
  const [username, password] = authDecode(req.headers.authorization);
  console.log(username, password);
  if (username === "admin" && password === "admin") {
    console.log("authorized");
    return next();
  }
  console.log("unauthorized");
  res.redirect("/login");
}

function authDecode(authHeader) {
  //auth header will be in format of "Basic Base64encoded("username:password")"
  if (authHeader !== undefined) {
    return base64.decode(authHeader.split(" ")[1]).split(":");
  }
  return ["", ""];
}
