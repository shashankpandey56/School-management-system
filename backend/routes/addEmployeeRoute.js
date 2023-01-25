const express = require("express");
const route = express.Router();
//middleware


//closeMiddleware
const addEmployeeCreate = require("../controller/addEmployee/addEmployeeCreate");
const addEmployeeFind = require("../controller/addEmployee/addEmployeeFind");
const addEmployeeUpdate = require("../controller/addEmployee/addEmployeeUpdate");
const addEmployeeDelete = require("../controller/addEmployee/addEmployeeDelete");

route.post("/create",  addEmployeeCreate);
route.get("/find", addEmployeeFind);
route.put("/update/:id", addEmployeeUpdate);
route.delete("/delete/:id", addEmployeeDelete);

module.exports = route;