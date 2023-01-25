const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
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
  specification:{
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
const teacher = mongoose.model("teacher", teacherSchema);
module.exports = teacher;
