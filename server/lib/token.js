const jwt = require("jsonwebtoken");

const { SECRET_KEY, CLIENT_HOST, API_HOST } = process.env;

if (!SECRET_KEY || !CLIENT_HOST || !API_HOST) {
  console.log("process.env", process.env);
  throw new Error("MISSING_ENVAR");
}

const IS_DEV = process.env.NODE_ENV !== "production";

//토큰 생성 로직
const generateToken = (payload, options) => {
  //생성할 토큰의 옵션
  const jwtOptions = {
    issuer: API_HOST,
    expiresIn: "30d",
    ...options,
  };
  // 토큰 옵션 중 만료기간이 undefined인 경우 해당 만료기간을 삭제
  if (!jwtOptions.expiresIn) {
    // removes expiresIn when expiresIn is given as undefined
    delete jwtOptions.expiresIn;
  }
  // promise 객체로 jwt 토큰 생성
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, jwtOptions, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

//토큰 해독 로직
//promise 객체로 jwt 토큰 해독
const decodeToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
};

//두가지 토큰을 쿠키에 담아 클라이언트로 응답하는 로직
const setTokenCookie = (res, tokens) => {
  const { accessToken, refreshToken } = tokens;

  res.cookie("access_token", accessToken, {
    httpOnly: true,
    //개발단계가 아닌 경우 domain을 CLIENT_HOST 그 외는 undefined
    domain: !IS_DEV ? CLIENT_HOST : undefined,
    maxAge: 1000 * 60 * 60 * 1, // 1hour
    secure: !IS_DEV,
  });

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    domain: !IS_DEV ? CLIENT_HOST : undefined,
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30day
    secure: !IS_DEV,
  });
};

module.exports = {
  generateToken,
  decodeToken,
  setTokenCookie,
};
