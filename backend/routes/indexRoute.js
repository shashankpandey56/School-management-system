
const express = require("express");


const route = express.Router();



route.use("/user",require('./userRoute'))
route.use('/teacher',require('./teacherRoute'));
route.use('/student',require('./studentRoute'));
route.use('/addemployee',require('./addEmployeeRoute'));
route.use('/feestructure',require('./feeStructureRoute'));
route.use('/superadmin',require('./superAdminRoute'));
route.use('/notification',require('./notificationRoute'));
module.exports = route;
