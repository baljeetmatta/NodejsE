//  let data="CodeQuotient";
// // module.exports=data;
// function log()
// {
//     console.log("Log Function called");
// }
//module.exports=log;
//module.exports=data;
//module.exports={fun:log,data:data}
//module.exports.fun=log;
//module.exports.data=data;
//module.exports={log,data};

const EventEmitter=require("events");
// const evt=new EventEmitter();
// //evt.emit("message");//raise event
// function log()
// {
//     console.log("Log called...");
//     evt.emit("message");

// }
// module.exports={log,evt};
class Logger extends EventEmitter
{
    log(){
        console.log("Woekring on log..");
        this.emit("message",{x:10,y:20});
    }
}
module.exports=Logger;



// evt.on("message",()=>{
//     console.log("Event Handled");
// })
// log();

//evt.emit("message");//raise event


///console.log(events);

//1361,1381,1396
