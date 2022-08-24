const express = require("express");

const user = express.Router();

const { needsAuth, consumeToken } = require("../../../../middleware");
const { register, login, logout, auth } = require("./user.ctrl");

user.post("/register", register);
user.post("/login", login);
//needAuth는 로그아웃 클릭시 유저정보가 있는지 확인하는 미들웨어다.
user.post("/logout", needsAuth, logout);
//메인 페이지에서 로그인 정보가 있는지 확인해주는 api
user.get("/auth", needsAuth, auth);

module.exports = user;
