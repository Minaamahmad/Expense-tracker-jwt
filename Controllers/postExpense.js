import { Expense } from "../Models/Expense.js";

export const postExpenses = async (req, res) => {
    const {amount , category, note}=req.body
  try {
    const expenses = new Expense({amount:amount,category:category,note:note})
    await expenses.save()
    res.status(200).json({
      ok: true,
      message:"successfull"

    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "Something went wrong",
      error: err.message,
      
    });
  }
};