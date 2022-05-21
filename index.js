import "./mongo";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import messageRoute from "./routes/messageRoute";
import sockets from "./sockets";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
dotenv.config();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
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
