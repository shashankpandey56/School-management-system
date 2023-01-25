const express = require("express");
const route = express.Router();
//middleware


//closeMiddleware
const notificationCreate = require("../controller/notification/notificationCreate");

const notificationUpdate = require("../controller/notification/notificationUpdate");
const notificationDelete = require("../controller/notification/notificationDelete");

route.post("/create",  notificationCreate);

route.put("/update/:id", notificationUpdate);
route.delete("/delete/:id", notificationDelete);

module.exports = route;