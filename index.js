import "./mongo.js";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import messageRoute from "./routes/messageRoute.js";
import sockets from "./sockets.js";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
dotenv.config();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

sockets(io);
app.use(cors());
app.use(express.json());
app.use("/api/message", messageRoute());

server.listen(process.env.PORT, () => {
  console.log("se esta escucnado puerto 3001");
});

// Separar carpetas / endpoint / inicar mongos
// Sockets
