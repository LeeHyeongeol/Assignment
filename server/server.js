require("dotenv").config();
const express = require("express");
const app = express();
const getConnection = require("database/get-connection");
const { associate } = require("database/sync");

const PORT = process.env.PORT || 4000;
console.log(PORT);

if (!PORT) {
  throw new Error("MISSING_ENVAR");
}

getConnection();
associate();

// 서버 동작
const server = app.listen(PORT, () => {
  console.log(`서버가 정상적으로 ${PORT}에서 실행되었습니다.`);
});

module.exports = server;
