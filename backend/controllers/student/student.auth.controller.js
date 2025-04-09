import redis from "../../connection/redis.connection.js";
import Student from "../../models/student.model.js";
import sendOTP from "../../utils/mailer.utlis.js";
import { generateTokens } from "../../utils/token.js";
import jwt from "jsonwebtoken";
// ✅ Registration - Sends OTP
export const studentRegistration = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    const studentProfileImage = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random
`;
    const isExistingStudent = await Student.findOne({ email });
    if (isExistingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student Already Exists! Please Login",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP and user details to Redis for 5 minutes
    await redis.set(
      `otp:${email}`,
      JSON.stringify({
        otp,
        firstName,
        lastName,
        password,
        phoneNumber,
        studentProfileImage,
      }),
      { EX: 300 } // Expire after 300 seconds = 5 minutes
    );

    await sendOTP(email, otp);

    return res.status(200).json({
      success: true,
      message: "OTP sent to your email",
    });
  } catch (error) {
    next(error);
  }
};

// ✅ OTP Verification - Registers Student
export const verifyStudentOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    const data = await redis.get(`otp:${email}`);
    console.log("Data from Redis:", data);
    console.log("Type of data:", typeof data);

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "OTP expired or not found",
      });
    }

    // ✅ Remove JSON.parse if data is already an object
    const parsedData = typeof data === "string" ? JSON.parse(data) : data;

    const {
      otp: storedOtp,
      firstName,
      lastName,
      password,
      phoneNumber,
      studentProfileImage,
    } = parsedData;

    if (storedOtp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    await Student.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      studentProfileImage,
    });

    await redis.del(`otp:${email}`);

    return res.status(201).json({
      success: true,
      message: "Student registered successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const studentLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const isStudent = await Student.findOne({ email });
    if (!isStudent) {
      return res.status(404).json({
        success: false,
        message: "Student Not found! Please Register",
      });
    }
    const isPasswordMatch = await isStudent.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Password is not matching! Try Again",
      });
    }

    const { accessToken, refreshToken } = generateTokens(isStudent._id);
    await redis.set(`refresh:${isStudent._id}`, refreshToken, {
      ex: 7 * 24 * 60 * 60,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true on production
      sameSite: "Strict", // or 'Lax' if cross-site is needed
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken, // still sent to frontend for Authorization header
      student: {
        id: isStudent._id,
        email: isStudent.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const studentLogout = async (req, res, next) => {
  try {
    // 1. Get refresh token from cookie
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: "No refresh token found in cookies",
      });
    }

    // 2. Decode refresh token to get user ID
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const userId = decoded.id;

    // 3. Delete refresh token from Redis
    await redis.del(`refresh:${userId}`);

    // 4. Clear the cookie
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    next(error);
  }
};
