import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set('strictQuery', false);

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("ERROR: MONGO_URI is not defined in .env");
  process.exit(1);
}

mongoose.connect(MONGO_URI).catch((error) => {
  console.error("Mongo initial connection error:", error.message);
});

mongoose.connection.on("connected", () => {
  console.log("Mongo has connected succesfully");
});
mongoose.connection.on("reconnected", () => {
  console.log("Mongo has reconnected");
});
mongoose.connection.on("error", (error) => {
  console.log("Mongo connection has an error", error.message);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongo connection is disconnected");
});
