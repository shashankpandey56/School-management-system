const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },

  password:{
    type:String,
    required:true,
  },
  photo:{
    type:String,
    required:true,

  },
  education:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    required:true,

  },
 

  pincode:{
    type:String,
    required:true,

  },
  state:{
    type:String,
    required:true,

  },
  fulladdress:{
    type:String,
    required:true,

  },
 


});
const addemployee = mongoose.model("addemployee", userSchema);
module.exports = addemployee;
