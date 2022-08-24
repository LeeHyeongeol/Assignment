const Sequelize = require("sequelize");
const db = require("../db");

const Score = db.define(
  "score",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    answer: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    fkUserId: Sequelize.INTEGER,
    fkProblemId: Sequelize.INTEGER,
  },
  { tableName: "Score" }
);

Score.associate = (models) => {
  Score.belongsTo(models.problem, {
    foreignKey: "fkProblemId",
    as: "problem",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  });
  Score.belongsTo(models.user, {
    foreignKey: "fkUserId",
    as: "user",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  });
};

module.exports = Score;
