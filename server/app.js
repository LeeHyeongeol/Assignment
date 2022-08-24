const express = require("express");
const cookieParser = require("cookie-parser");
const https = require("https");
const routes = require("./routes");

// express를 이용한 서버 구현
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
