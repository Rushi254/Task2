const mongoose = require('mongoose');
const singUpScheman = new mongoose.Schema
({
    name:String,
    fathername:String,
    DOB:String,
    branch:String,
    rollno:Number,
    section:String,
    addresss:String,
    mobileno:Number,
    password:String,
    email:String

});
const SingUp = mongoose.model("SignUp",singUpScheman);
module.exports=SingUp;