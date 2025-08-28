import { Expense } from "../Models/Expense.js";


export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find(); 
    res.status(200).json({
      ok: true,
      count: expenses.length,
      expenses,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};
