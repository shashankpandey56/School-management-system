const express = require("express");
const route = express.Router();

const feeStructureCreate = require("../controller/feeStructure/feeStructureCreate");

route.post("/create",  feeStructureCreate);


module.exports = route;