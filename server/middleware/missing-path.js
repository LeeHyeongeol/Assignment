//잘못된 경로를 반환.
const missingPath = (req, res, next) => {
  const { url } = req;
  // 무슨 의미인가?
  // 파비콘 경로를 서버로 보낸다. 저 경로는 사람의 눈으로 확인할 피룡가 없다.
  const removeLog = ['/favicon.ico'].includes(url);

  if (removeLog) {
    res.sendStatus(200);
    return;
  }
  //이미지 경로가 잘못되었는지 확인
  const isContent = url.includes('/images');
  //포함하고 있는데 응답할 값(사진이나 이미지가)이 없는지 or 서버에서 작성하지 않은 요청할 경로가 없는지 missing-path까지 왔으면 필요없는 것, 이미지가 없는 것이면 missing-path
  const message = isContent ? 'NOT_FOUND' : 'MISSING_PATH';
  next(message);
};

module.exports = missingPath;
