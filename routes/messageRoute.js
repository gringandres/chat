const express = require("express");
const route = express.Router();
const Message = require("../model/Messages");

module.exports = () => {
  // route.get("/", (req, res) => {
  //   res.send("<h1>Hola</h1>");
  // });

  route.get("/", async (req, res) => {
    const message = await Message.find({});
    res.json(message);
  });

  route.post("/", async (req, res) => {
    const { message, user } = req.body;
    if (!message) res.status(400).json({ error: "Message is missing" });
    const newMessage = new Message({
      user,
      message,
    });
    const saveMessage = await newMessage.save();
    res.status(201).json(saveMessage);
  });
  return route;
};
