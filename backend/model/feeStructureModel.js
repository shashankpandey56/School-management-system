const mongoose = require("mongoose");
const feeStructureSchema = new mongoose.Schema({
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
rollno:{
type:String,
required:true,
},
standard:{
    type:String,
    required:true,
},
amount:{
    type:String,
    required:true,
},

fees:{
    type:String,
    required:true,
},
fulladdress:{
    type:String,
    required:true,

  },


 


});
const feeStructure = mongoose.model("feeStructure", feeStructureSchema);
module.exports = feeStructure;