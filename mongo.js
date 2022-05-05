import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { MONGO_DB_URL } = process.env;

const connection = MONGO_DB_URL;

if (!connection) console.log("Not connected");

mongoose
  .connect(connection)
  .then(() => {
    console.log("Data Base Connected");
  })
  .catch((err) => console.log(err));
