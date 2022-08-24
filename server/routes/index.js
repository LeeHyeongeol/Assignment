// const { route } = require("app");
const express = require("express");
const routes = express.Router();
const api = require("./api");

//quiz 접속 시 라우팅
routes.use("/api", api);

module.exports = routes;
