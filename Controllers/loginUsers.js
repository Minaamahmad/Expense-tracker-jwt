import { Users } from "../Models/user.js";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.Secret_KEY);

    res.json({
      _id: user._id,
      name: user.userName,
      email: user.Email,
      token,
    });

res.cookie("token",token,{
    httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
})



  }  catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
