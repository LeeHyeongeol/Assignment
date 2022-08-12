const dotenv = require("dotenv");
const path = require("path");

const isDev = process.env.NODE_ENV !== "production";
//바로 env 파일 불러오는 건 production 단계에서는 없는 이야기.
// 개발 환경에 따른  환경변수 불러오기
dotenv.config({
  path: path.join(process.cwd(), isDev ? ".env" : ".env.production"),
});
