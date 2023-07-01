import express from "express";
import expressWs from "express-ws";

const app = express();
expressWs(app);

const router = express.Router();
expressWs(router);
app.use("/echo", router);

router.ws("/", (ws, req) => {
  ws.on("message", (msg) => {
    ws.send(msg);
  });

  ws.on("close", () => {
    console.log("WebSocket was closed");
  });
});

app.listen(8090);
