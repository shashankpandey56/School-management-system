const express = require("express");
const route = express.Router();




const teacherCreate = require("../controller/teacher/teacherCreate");
const teacherFind = require("../controller/teacher/teacherFind");
const teacherUpdate = require("../controller/teacher/teacherUpdate");
const teacherDelete = require("../controller/teacher/teacherDelete");





route.post("/create", teacherCreate);
route.get("/find", teacherFind);
route.put("/update/:id", teacherUpdate);
route.delete("/delete/:id", teacherDelete);

module.exports = route;