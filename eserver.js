const express=require("express");
const app=express();
const fs=require("fs");
app.use(express.static("."));
//app.set("view engine","ejs");

app.get("/test",(req,res)=>{
    res.render("home",{msg:"CodeQuotient",courses:["one","two","three"]});


})
app.get("/dy",(req,res)=>{
    //res.sendFile(__dirname+"/fact.html");
    //let data=fs.readFileSync("./fact.html","utf-8");
    //res.send(data);
    fs.readFile("./fact.html","utf-8",(err,data)=>{
        res.send(data);

    })


})

app.listen(3000);