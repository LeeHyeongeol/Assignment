//missingPath에서 받은 error 메시지
const errorHandler = (err, req, res, next) => {
  // You will send an error message through slack or telegram...
  //try,catch문을 사용할 때 err에는 stack이 있음
  //next로 미들웨어로 온거는 서버에 문제가 있지만 클라에게 알려주겠다.
  //try catch에서 throw new Error는 에러구문에 담긴다. 시작하자마자 에러발생. 프로그래머가 코드를 잘못 짰다. .env 조건을 맞추지 않았다.
  //
  const message = err.stack || err;

  console.error(message);

  res.status(500).send(err.message || err);
  next();
};

module.exports = errorHandler;
