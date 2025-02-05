import mongoose from "mongoose";

const mongodbUrl = process.env.MONGO_URL;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is Successfully Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectToMongoDB;
