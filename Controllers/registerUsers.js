import { Users } from "../Models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const registerUser = async (req, res) => {
  const { userName, Email, password } = req.body;

  try {
    let user = await Users.findOne({ Email });
    if (user) return res.status(400).json({ message: "User already exists" });

    let newUser = new Users({ userName, Email, password }); 
    newUser = await newUser.save(); 
    const token = jwt.sign({ id: newUser._id }, process.env.Secret_KEY);

    res.status(201).json({
      _id: newUser._id,        
      userName: newUser.userName,
      Email: newUser.Email,
      token,
    });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
