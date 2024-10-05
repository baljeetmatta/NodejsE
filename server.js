//console.log("Hello");
//console.log(module);
//const x=require("os");//core, package.json(external)
//const log=require("./code");
//console.log(data);
//log();

//data=10;

//console.log(x);

//const log=require("./code");
//log();
//const EventEmitter=require("events");
//const log=require("./code");
// const evt=new EventEmitter();
// evt.on("message",()=>{
//     console.log("Handled by user");
// })
//log();
// const code=require("./code");
// code.evt.on("message",()=>{
//     console.log("Event handled by user")
// })
// code.log();

//console.log(code.data);
//code.fun();
// const Logger=require("./code");
// const logger=new Logger();
// logger.on("message",(data)=>{
//     console.log("Event handler",data)
// })
// logger.log();
const http=require("http");
const fs=require("fs");

const server=http.createServer(processRequest);

function processRequest(req,res){
    res.setHeader("content-type","text/html");
    console.log(req.url);
    let filename="";;
    if(req.url=="/")
        filename="/index.html";
    else if(req.url=="/about")
        filename="/about.html";
    else
    filename=req.url;
res.write(readFile(filename));
res.end();


// if(req.url=="/style.css")
// {
//         fs.readFile("./style.css","utf-8",(err,data)=>{
//             if(err)
//                 res.write("Error in reading page");
//            else
//             res.write(data);
//         //console.log(data);
//      res.end();
    
//     });
// }
    
//     else if(req.url=="/script.js")
//     {
//         fs.readFile("./script.js","utf-8",(err,data)=>{
//             if(err)
//                 res.write("Error in reading page");
//            else
//             res.write(data);
    
//             res.end();
    
//         })
//         //res.write("Welcome to Home Page "+req.url);
//     }

// else if(req.url=="/" || req.url=="/index.html")
// {
//     fs.readFile("./index.html","utf-8",(err,data)=>{
//         if(err)
//             res.write("Error in reading page");
//        else
//         res.write(data);

//         res.end();

//     })
//     //res.write("Welcome to Home Page "+req.url);
// }
// else if(req.url=="/about" || req.url=="/about.html")
// {
//    // res.write("About us page");
//    // res.end();
//    fs.readFile("./about.html","utf-8",(err,data)=>{
//     if(err)
//         res.write("unable to read page");
//     else
//     res.write(data);
// res.end();

//    })

// }
// else
// {
//     res.write("Page not found");
//     res.end();
// }
    

 //console.log("A new Request rec.")
}
server.listen(3000); // server.on("connection",(socket)=>{ //     console.log("A new Request rec.")
// })

function readFile(filename)
{
    let data
    try{    
        data=fs.readFileSync("."+filename);
        return data;
    }catch(e){
        return "";


    }


}