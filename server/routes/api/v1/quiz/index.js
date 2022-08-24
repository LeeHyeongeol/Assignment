const express = require("express");

const quiz = express.Router();

const { problem } = require("./quiz.ctrl");

quiz.post("/problem", problem);

module.exports = quiz;
