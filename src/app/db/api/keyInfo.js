const { DbService } = require("./dbService");

const db = DbService("/key-info.json");

const resetKeyInfo = () => {
  const defaultDB = DbService("key-default-info.json");
  const defaultKeyInfo = defaultDB.get("keyInfo").value();

  db.has("keyInfo").unset("keyInfo").write();
  db.set("keyInfo", defaultKeyInfo).write();
};

const getKeyInfo = () => {
  return db.get("keyInfo").value();
};

const setKeyHints = (letter, hints) => {
  db.get("keyInfo").flatten().find({ letter }).assign({ hints }).write();
};

module.exports = {
  resetKeyInfo,
  getKeyInfo,
  setKeyHints,
};
