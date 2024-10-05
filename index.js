const express=require("express");
const app=express();//http.createServer
const fs=require("fs");
const path=require("path")
const esession=require("express-session");
const userRoute=require("./routes/userRoute");
const orderRoute=require("./routes/orderRoute");
const client=require("mongodb").MongoClient;
let dbinstance;
client.connect("mongodb+srv://userroot:Password4001@cluster0.cmk41.mongodb.net/")
.then((server)=>{
    console.log("DB Connected...")
    dbinstance=server.db("ecommerce");

}).catch((err)=>{
    console.log("Error",err);

})
app.set("view engine","ejs");
//db.users.findOne({})
//db.users.find({})
app.get("/getUsers",(req,res)=>{
    dbinstance.collection("users").find({}).toArray()
    .then((data)=>{
            res.json(data);

    }).catch((err)=>{
        console.log("Error",err);

    })


});
app.get("/AddUser",(req,res)=>{
    let obj={};
    obj.name="Test";
    obj.username="Testuser";
    obj.password="testpassword";
    dbinstance.collection("users").insertOne(obj)
    .then((response)=>{
        //res.json(response);
        console.log(response);
        res.redirect("/getUsers");


    }).catch((err)=>{

    })

})

app.use(express.urlencoded({extended:true}));
app.use(esession({
    saveUninitialized:true,
    resave:false,
    secret:'SD3$#$SD454'

}))
app.use("/orders",auth,orderRoute);

app.use("/users",auth,userRoute);
///users/dashboard
function auth(req,res,next)
{
    if(req.session.user)
        next();
    else
    res.redirect("/login")



}
// /dashboard /users/dashboard
// /profile /users/profile
app.use(express.static("."));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index1.html");

})
app.get("/Login",(req,res)=>{ console.log(req.query);
   // res.send("GET Request rec.");
   
    res.sendFile(path.join (__dirname,"./Login.html"));


})
app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/login")
})
// app.get("/dashboard",(req,res)=>{ console.log(req.query);
//     // res.send("GET Request rec.");
//     if(req.session.user)
//      res.sendFile(path.join (__dirname,"./Dashboard.html"));
//     else
//     res.redirect("/login");

 
//  })
//  app.get("/profile",(req,res)=>{ console.log(req.query);
//     // res.send("GET Request rec.");
//     if(req.session.user)
//      res.sendFile(path.join (__dirname,"./Profile.html"));
//     else
//     res.redirect("/login");

 
//  })
app.post("/Login",(req,res)=>{

    dbinstance.collection("users").findOne({$and:[{"username":req.body.username},{"password":req.body.password}]})
    .then((response)=>{
        if(response==null)
            res.redirect("/login");
        else
        {
            req.session.user=response.name;
            req.session.id=response._id;
            res.redirect("/users/dashboard");
            
        }

    }).catch((err)=>{

    })

    // let users=JSON.parse ( fs.readFileSync("users.json"));
    // let results=users.filter((item)=>{
    //     if(item.username==req.body.username && item.password==req.body.password)
    //         return true;

    // })
    // if(results.length==0)
    //     res.redirect("/login");
    // else
    // {
    //     req.session.user="x";

    // res.redirect("/users/dashboard");
    // }

   // console.log(req.body)
//res.send("");

})
app.all("*",(req,res)=>{
    res.status(404).send("Page not found")
})
// app.get("/",(req,res)=>{
//     //res.write("Welcome to nodejs ");
//     //res.end();
// console.log(__dirname);

//     //res.send("Welcome to nodejs");
//     //res.sendFile("/users/macbook/desktop/data/nodejs/batch")
//     res.sendFile(__dirname+"/index.html");

// })
// app.get("/",(req,res)=>{
//     res.send("Another endpoint");

// })
// app.get("/style.css",(req,res)=>{
//     res.sendFile(__dirname+"/style.css");

// })
app.listen(3000);
