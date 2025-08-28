import { Expense } from "../Models/Expense.js";


export const  deleteExpense=async(req,res)=>{
    const{_id}=req.params;
    try{
         await Expense.findByIdAndDelete(_id);
         res.status(200).json({ ok: true, message: "Expense deleted successfully" });
    }catch{
                 res.status(500).json({ ok: false, message: "Error Deleting" });

    }
}