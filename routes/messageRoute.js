import express from "express";
import Message from "../model/Messages";

const route = express.Router();

const messageRouter = () => {
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

export default messageRouter;
