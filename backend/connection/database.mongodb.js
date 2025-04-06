import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const mongodbUrl = process.env.MONGO_URL;
console.log("******mongo****", mongodbUrl);
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongodbUrl);
    console.log("MongoDB is Successfully Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectToMongoDB;
