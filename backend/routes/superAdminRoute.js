const express = require("express");
const route = express.Router();
//middleware


//closeMiddleware
const superAdminCreate = require("../controller/superAdmin/superAdminCreate");

const superAdminUpdate = require("../controller/superAdmin/superAdminUpdate");
const superAdminDelete = require("../controller/superAdmin/superAdminDelete");

route.post("/create",  superAdminCreate);

route.put("/update/:id", superAdminUpdate);
route.delete("/delete/:id", superAdminDelete);

module.exports = route;