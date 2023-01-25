const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
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
rollno:{
type:String,
required:true,
},
standard:{
    type:String,
    required:true,
},
emergencyno:{
    type:String,
    required:true,
},
fees:{
    type:String,
    required:true,
},
 
joiningdate:{
    type:String,
    required:true,

  },
  fulladdress:{
    type:String,
    required:true,

  },


 


});
const student = mongoose.model("student", studentSchema);
module.exports = student;
