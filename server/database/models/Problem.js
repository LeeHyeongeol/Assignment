const Sequelize = require("sequelize");
const db = require("../../database/db");

const Problem = db.define(
  "problem",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: Sequelize.STRING,
    language: Sequelize.STRING,
    title: Sequelize.STRING,
    content: Sequelize.ARRAY(Sequelize.STRING),
    answer: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  { tableName: "Problem" }
);

Problem.associate = (models) => {
  Problem.hasMany(models.score, {
    foreignKey: "fkProblemId",
    as: "results",
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  });
};

// , {
//   foreignKey: "fkUserId",
//   as: "writer",
//   onDelete: "CASCADE",
//   onUpdate: "RESTRICT",
// }
// Post.associate = (models) => {
//   Post.belongsTo(models.user, {
//     foreignKey: "fkUserId",
//     as: "writer",
//     onDelete: "CASCADE",
//     onUpdate: "RESTRICT",
//   });
// };

module.exports = Problem;
