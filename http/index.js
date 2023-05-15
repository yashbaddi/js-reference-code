import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("hey");
  res.write("hello");
  console.log(res);

  res.end();
});

server.listen(8080, () => {
  console.log("connection Started Port 8080");
});
