import { Expense } from "../Models/Expense.js";



export const  updateExpense=async(req,res)=>{
    const{_id}=req.params;
    const {amount , category, note}=req.body
    try{
         await Expense.findByIdAndUpdate(_id,
            { amount, category, note },
      { new: true }
         );

         res.status(200).json({ ok: true, message: "Expense deleted successfully" });
    }catch{
                 res.status(500).json({ ok: false, message: "Error Deleting" });

    }
}