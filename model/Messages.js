import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  user: String,
  message: String,
  date: { type: String, default: Date },
});
messageSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject._id;
  },
});
const Message = mongoose.model("message", messageSchema);

export default Message;
