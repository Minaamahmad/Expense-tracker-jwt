import mongoose from "mongoose";
import dotenv from "dotenv";

const connectmongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("databade Connected");
  } catch (err) {
    console.error("Error connecting Database:", err);
  
}
}

export default connectmongoDB;
