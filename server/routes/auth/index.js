const express = require("express");
const auth = express.Router();

auth.post("/signin", signin);
auth.post("/signout", signout);

module.exports = auth;
