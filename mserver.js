//mongodb+srv://userroot:<db_password>@cluster0.cmk41.mongodb.net/

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const User=require("./models/userModel");

mongoose.connect("mongodb+srv://userroot:Password4001@cluster0.cmk41.mongodb.net/ecomm")
.then((response)=>{
    console.log("Connected ...")
})
app.get("/getUser",(req,res)=>{

//dbinstance.collection("users").find({})
//dbinstance.collection("users") ->User
//User.findOneAndUpdate({Criteria},{update})
//update users set name='',city='' where username='test'
//User.findOneAndUpdate({'username':'test},{name:'newname',city:'test'})
User.find({}).then((response)=>{
    res.json(response);

})

})
app.get("/addUser",(req,res)=>{
    let obj={};
    obj.username="Test";
    obj.password="password";
    obj.name="Testname";
    obj.firstname="First";
    obj.lastname="Last";
    const user=new User(obj);
    //user.Name="Code Quotient";
console.log(user.Name);

    user.save().then((response)=>{
        console.log(response);
        res.end();

    })
})



app.listen(3000);
