const express=require("express");
const orderRoute=express.Router();
const path=require("path");

orderRoute.get("/dashboard",(req,res)=>{

    res.sendFile(path.join(__dirname,"../dashboard.html"));

})
orderRoute.get("/details/:x/:y",(req,res)=>{
    console.log(req.params.x);


    res.sendFile(path.join(__dirname,"../profile.html"));

})
module.exports=orderRoute