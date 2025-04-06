import express from "express";
import {
  studentLogin,
  studentLogout,
  studentRegistration,
  verifyStudentOtp,
} from "../controllers/student/student.auth.controller.js";
import { refreshAccessToken } from "../utils/token.js";
const studentRouter = express.Router();

studentRouter.post("/student-register", studentRegistration);
studentRouter.post("/verify-student-otp", verifyStudentOtp);
studentRouter.post("/student-login", studentLogin);
studentRouter.get("/student-logout", studentLogout);
studentRouter.get("/student-refresh-token", refreshAccessToken);
export default studentRouter;
