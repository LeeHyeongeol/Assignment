const { Problem } = require("../../../../database/models");

exports.problem = async (req, res, next) => {
  const { language } = req.body;
  let result = null;
  try {
    result = await Problem.findAll({
      where: {
        language,
      },
      attributes: ["title", "content", "answer"],
    });
    console.log(result);
  } catch (err) {
    next(err);
    return;
  }
  res.status(200).send(result);
  return;
};
