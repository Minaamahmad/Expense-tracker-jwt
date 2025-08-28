import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  note: String,
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export  const  Expense=mongoose.model("Expense", expenseSchema);