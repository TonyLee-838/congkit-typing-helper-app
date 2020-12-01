const { DbService } = require("./dbService");

const db = DbService("/app-config.json");

const updateConfig = (path, value) => {
  db.set(path, value).write();
};

const getConfig = (path) => {
  return db.get(path).value();
};

module.exports = { updateConfig, getConfig };
