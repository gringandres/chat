import Message from "./model/Messages";

const sockets = (io) => {
  io.on("connection", (socket) => {
    socket.on("sendMessage", async (data) => {
      const newMessage = new Message({
        message: data.message,
        user: data.user,
      });
      await newMessage.save();
    });
  });
};

export default sockets;
