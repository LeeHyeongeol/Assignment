const db = require("./db");

//비동기로 처리하는 이유는?
//postgreSQL과 sequelize와의 연동
const getConnection = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

module.exports = getConnection;
