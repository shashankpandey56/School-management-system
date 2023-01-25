const express = require("express");
const route = express.Router();

const studentCreate = require("../controller/student/studentCreate");
const studentFind = require("../controller/student/studentFind");
const studentUpdate = require("../controller/student/studentUpdate");
const studentDelete = require("../controller/student/studentDelete");

route.post("/create",  studentCreate);
route.get("/find", studentFind);
route.put("/update/:id", studentUpdate);
route.delete("/delete/:id", studentDelete);

module.exports = route;