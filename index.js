require("dotenv").config(); // ENV
require("./mongo");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const messageRoute = require("./routes/messageRoute");

app.use(express.json());
app.use("/api/message", messageRoute());

server.listen(process.env.PORT, () => {
  console.log("se esta escucnado puerto 3001");
});

// Separar carpetas / endpoint / inicar mongos
// Sockets
