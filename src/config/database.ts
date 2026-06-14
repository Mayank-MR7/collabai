import mongoose from "mongoose";

const connectDB = async function (): Promise<void> {
  const mongoURL = process.env.MONGO_URI;
  if (!mongoURL) {
    throw new Error("Mongo_URI is not defined");
  }
  await mongoose.connect(mongoURL);
  console.log("Database connected");
};

export default connectDB;
