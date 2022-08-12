const db = require("./db");

const { models } = db;
console.log(models);
const associate = () => {
  Object.values(models).forEach((model) => {
    if (model.associate) {
      model.associate(models);
    }
  });
};

const sync = () => {
  associate();
  db.sync({ force: true }).catch((err) => {
    console.log("씽크에러####", err);
  });
};

module.exports = { associate, sync };
