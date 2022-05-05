import "./mongo";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import messageRoute from "./routes/messageRoute";
const app = express();
dotenv.config();
const server = http.createServer(app);

app.use(express.json());
app.use("/api/message", messageRoute());

server.listen(process.env.PORT, () => {
  console.log("se esta escucnado puerto 3001");
});

// Separar carpetas / endpoint / inicar mongos
// Sockets
