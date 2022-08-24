const Joi = require("joi");
const { Op } = require("sequelize");

const { validateSchema } = require("../../../../lib/utils");
const { setTokenCookie } = require("../../../../lib/token");
const { User } = require("../../../../database/models");
const db = require("../../../../database/db");

exports.register = async (req, res, next) => {
  //회원가입 시 입력한 정보 검증
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    username: Joi.string().min(0).max(10).required(),
    password: Joi.string().min(6).max(20).required(),
  });
  //검증 안되면 끝
  if (!validateSchema(res, schema, req.body)) return;

  const { username, email, password } = req.body;

  let existsUser = null;
  try {
    //db에 유저정보가 있는지 확인
    existsUser = await User.findOne({
      where: {
        [Op.or]: {
          email,
        },
      },
    });
  } catch (err) {
    // throw new Error 와의 차이점
    next(err);
    return;
  }
  //방어코드
  if (existsUser) {
    res.status(409).send({ message: "already exist Info" });
    return;
  }
  //회원가입 한 내용을 DB에 반영하기 위한 작업
  const t = await db.transaction();

  try {
    const user = await User.register({
      username,
      email,
      password,
      //해당 변경내용을 DB에 반영하는 내용
      transaction: t,
    });
    //추가된 유저정보를 바탕으로 토큰 생성
    const tokens = await user.generateUserToken();
    //쿠키에 담아 응답
    setTokenCookie(res, tokens);
    //DB에 반영됨. rollback(되돌리기) 불가
    await t.commit();

    res.status(201).send({ data: user, message: "Successfully Signed Up" });
  } catch (err) {
    //트랜잭션 에러가 발생하면 rollback 시킴
    await t.rollback();
    next(err);
  }
};
//트랜잭션 제어를 위한 명령어
//commit : 저장되지 않은 모든 데이터를 db에 저장하고 현재의 트랜잭션을 종료하는 명령이다.
//rollback : 저장되지 않은 모든 데이터 변경 사항을 취소하고 현재의 트랜잭션을 끝내라는 명령이다.
exports.login = async (req, res, next) => {
  //입력한 로그인 정보 검증
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
  });

  if (!validateSchema(res, schema, req.body)) return;

  const { email, password } = req.body;

  let user = null;
  try {
    //유저정보를 바탕으로 db 탐색
    user = await User.findOne({
      where: { email },
      attributes: ["id", "username", "email", "password"],
    });
  } catch (err) {
    //thow new Error와의 차이점
    next(err);
    return;
  }

  if (!user) {
    res.status(404).send({ message: "Not found user" });
    return;
  }

  try {
    const validate = user.validatePassword(password);

    if (!validate) {
      res.status(403).send({ message: "Wrong password" });
      return;
    }
    //유저정보를 바탕으로 토큰생성
    //User.prototype.generateUserToken
    const tokens = await user.generateUserToken();
    //쿠키에 담아 응답
    setTokenCookie(res, tokens);
    res.status(201).send({ message: "Successfully Signed In" });
    return;
  } catch (err) {
    next(err);
    return;
  }
};

exports.logout = async (req, res) => {
  //쿠키를 초기화 해서 응답
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");

  res.status(200).send({ message: "Successfully Loged out" });
  return;
};

exports.auth = async (req, res) => {
  //요청에 따라 사용자 정보 반환
  console.log("토큰해독데이터", req.user);
  if (!req.cookies.access_token) {
    res.status(400).json({ message: "로그인 정보가 없습니다." });
    return;
  }
  //req.user.dataVaules 할 필요 없다!
  res.status(200).send({ data: req.user, message: "Successfully authed" });
  return;
};
