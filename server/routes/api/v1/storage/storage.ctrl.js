const db = require("../../../../database/db");
const { User, Score } = require("../../../../database/models");
const { Op } = require("sequelize");
//정답 맞춘 데이터 저장
exports.store = async (req, res, next) => {
  const { answer } = req.body;
  try {
    //중복문제 필터링
    const existAnswer = await Score.findOne({
      where: { answer },
    });
    if (existAnswer) {
      res.send("이미 맞춘 문제입니다.");
      return;
    }

    const storeProblem = await Score.create({
      answer,
      fkUserId: req.user.dataValues.id,
    });
    return res.status(201).send({ data: storeProblem, message: "stored" });
  } catch (err) {
    next(err);
  }
};

exports.count = async (req, res, next) => {
  try {
    const successCount = await Score.findAll({
      where: { fkUserId: req.user.dataValues.id },
    });
    res.status(200).send({ data: successCount, message: "count" });
    return;
  } catch (err) {
    next(err);
    return;
  }
};

exports.fail = async (req, res, next) => {
  const { answer } = req.body;
  try {
    const failAnswer = await Score.destroy({
      where: { answer },
    });
    if (!failAnswer) {
      res.send("없음");
      return;
    }
    res.send({ message: "Successfully destroied" });
  } catch (err) {
    next(err);
    return;
  }
};

exports.clean = async (req, res, next) => {
  try {
    const destroyAnswer = await Score.destroy({
      where: { fkUserId: req.user.dataValues.id },
    });
    res.status(200).send({ message: "clear" });
  } catch (err) {
    next(err);
    return;
  }
};
