import mongoose from "mongoose";

const userschema= new mongoose.Schema({

    userName:{
       type: String,
        required:true
    },
    Email:{
       type: String,
        required:true,
        unique: true
        
    },
    password:{
       type: String,
        required:true
    }



})

 export const Users=mongoose.model("user",userschema)