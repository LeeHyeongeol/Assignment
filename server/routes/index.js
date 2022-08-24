const express = require("express");
const routes = express.Router();
const quiz = require("./quiz");
const auth = require("./auth");

//quiz 접속 시 라우팅
routes.use("/quiz", quiz);
routes.use("/auth", auth);

module.exports = routes;
