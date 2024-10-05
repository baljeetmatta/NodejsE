const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    "username":String,
    "password":String,
    "age":{
        type:Number,
        //required:true
        default:10

    },
    "firstname":String,
    "lastname":String
})
userSchema.virtual("Name").get(function(){
    return this.firstname+" "+this.lastname;

})
//Name="Code Quotient"
userSchema.virtual("Name").set(function(name){
    let arr=name.split(" ");
    this.firstname=arr[0];
    this.lastname=arr[1];
    
})
module.exports=mongoose.model("users",userSchema);
