const express = require("express");

const api = express.Router();
console.log("v1v1");
const v1 = require("./v1");

api.use("/v1", v1);

module.exports = api;
