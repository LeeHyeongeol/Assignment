"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Score", "fkUserId", {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      references: {
        model: "User",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "RESTRICT",
    }),
      await queryInterface.addColumn("Score", "fkProblemId", {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "Problem",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Score", "fkUserId");
    await queryInterface.removeColumn("Score", "fkProblemId");
  },
};
