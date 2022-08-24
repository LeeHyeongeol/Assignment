const express = require("express");

const storage = express.Router();
const { consumeToken } = require("../../../../middleware");

const { store, count, clean, fail } = require("./storage.ctrl");

storage.post("/store", consumeToken, store);
storage.post("/clean", consumeToken, clean);
storage.post("/fail", consumeToken, fail);
storage.get("/count", consumeToken, count);

module.exports = storage;
