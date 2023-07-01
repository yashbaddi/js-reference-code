import net from "net";

const server = net.createServer();

server.on("connection", (socket) => {
  console.log("connection started");
  // console.log(socket);
  // socket.write("send data");
  console.log(socket);
  socket.on("data", (data) => {
    console.log(data);
  });
  socket.write("Hey connection");
  // socket.setEncoding("utf-8");
});

server.listen(7001, () => {
  console.log("server started....");
});
