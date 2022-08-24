require("dotenv").config();

const development = {
  username: POSTGRES_USER,
  password: POSTGRES_PW,
  database: POSTGRES_DATABASE,
  host: POSTGRES_HOST,
  dialect: "postgres",
};
const production = {
  username: POSTGRES_USER,
  password: POSTGRES_PW,
  database: POSTGRES_DATABASE,
  host: POSTGRES_HOST,
  dialect: "postgres",
};
const test = {
  username: POSTGRES_USER,
  password: POSTGRES_PW,
  database: POSTGRES_DATABASE,
  host: POSTGRES_HOST,
  dialect: "postgres",
};

module.exports = { development, production, test };
