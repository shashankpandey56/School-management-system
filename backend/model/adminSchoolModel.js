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
  logo:{
    type:String,
    required:true,

  },
  country:{
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
const user = mongoose.model("user", userSchema);
module.exports = user;
