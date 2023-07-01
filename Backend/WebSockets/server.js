import { WebSocketServer } from "ws";

const wsServer = new WebSocketServer({ port: 8080 });

wsServer.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("%s", data);
  });
});
