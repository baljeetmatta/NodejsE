const express=require("express");
const userRoute=express.Router();
const path=require("path");

userRoute.get("/dashboard",(req,res)=>{

    res.sendFile(path.join(__dirname,"../dashboard.html"));

})
userRoute.get("/profile",(req,res)=>{

    res.sendFile(path.join(__dirname,"../profile.html"));

})
module.exports=userRoute