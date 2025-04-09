//importing the requirements
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import connectToMongoDB from "./connection/database.mongodb.js";
import errorHandler from "./middlewares/errorHandler.js";
import studentRouter from "./routes/student.routes.js";
//requiring the dotenv config
configDotenv();
//geting varibale from the dot env
const port = process.env.PORT;
// creating the instance of express
const app = express();
//option for cors
const option = {
  origin: process.env.FRONTEND_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
//using cors
app.use(cors(option));
app.use(express.json());
app.use(errorHandler);
app.use(cookieParser());
//routes
app.use("/api/student", studentRouter);
//getting homepage, test Api
app.get("/", (req, res) => {
  res.send("HEllo From Backend");
});
app.get("/test", (req, res) => {
  res.send("This is a testing Api");
});
//handfling the rount not found error
app.use((req, res, next) => {
  const error = new Error("Route Not Found");
  error.statusCode = 404;
  next(error);
});
//activating the server
app.listen(port, () => {
  console.log(`App is runing on ${port}`);
});
//cennection to mongodb database
connectToMongoDB();
