import express from "express"
import { getExpenses } from "../Controllers/getExpense.js";
import { postExpenses } from "../Controllers/postExpense.js";
import { deleteExpense } from "../Controllers/deleteExpense.js";
import { updateExpense } from "../Controllers/UpdateExpense.js";
import { registerUser } from "../Controllers/registerUsers.js";
import { loginUser } from "../Controllers/loginUsers.js";
import { logoutUser } from "../Controllers/logoutuser.js";
import { protect } from "../Controllers/auth.js";

const router=express.Router()


router.get("/getExpense",getExpenses)
router.post("/post",postExpenses)
router.delete("/delete/:_id",deleteExpense)
router.put("/update/:_id",updateExpense)

//USERS ROUTE
router.post("/Adduser",registerUser)
router.get("/User",loginUser)
router.post("/logout", protect, logoutUser);



export default router;
