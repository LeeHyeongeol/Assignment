const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const https = require("https");
const routes = require("./routes");
const { consumeToken, missingPath, errorHandler } = require("./middleware");

// express를 이용한 서버 구현
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: [CLIENT_HOST],
    credentials: true,
    methods: ["GET", "POST"],
  })
);

//json 형태의 데이터를 해석
app.use(express.json());
app.use(consumeToken);

app.use("/", routes);
app.use(missingPath);
app.use(errorHandler);

module.exports = app;
