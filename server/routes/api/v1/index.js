const express = require("express");
const v1 = express.Router();

const user = require("./user");
const quiz = require("./quiz");
const storage = require("./storage");

v1.use("/user", user);
v1.use("/quiz", quiz);
v1.use("/storage", storage);

module.exports = v1;
