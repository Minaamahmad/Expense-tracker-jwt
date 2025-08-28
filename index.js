import express, { Router } from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectmongoDB from "./utils/mongodb.js"
import router from "./Routes/Routes.js"
import cookieParser from "cookie-parser"

dotenv.config()

const app=express()
app.use(express.json());
connectmongoDB()

app.use(cors({
    origin: "http://localhost:3000",
  credentials: true,
}))

app.use(cookieParser());

const startServer = async () => {
  try {
    await connectmongoDB(); // wait for DB connection
    app.use("/api/auth", router); // mount routes AFTER DB connected

    app.listen(5050, () => {
      console.log("Backend is working on port 5050");
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};
startServer()

